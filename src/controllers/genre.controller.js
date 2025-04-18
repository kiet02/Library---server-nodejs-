const { Genre } = require("../models");

exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres.length ? genres : "No genres found");
  } catch (error) {
    res.status(500).json({
      err: 1,
      msg: error.message,
    });
  }
};

exports.getGenreByName = async (req, res) => {
  try {
    const query = {
      include: ["Books"],
    };

    // Only add where clause if name is not 'all'
    if (req.params.name !== "All") {
      query.where = { name: req.params.name };
    }

    const genre = await Genre.findOne(query);

    res.json(genre || "Genre not found");
  } catch (error) {
    res.status(500).json({
      err: 1,
      msg: error.message,
    });
  }
};

exports.createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    res.status(201).json({
      err: 0,
      data: genre,
    });
  } catch (error) {
    res.status(400).json({
      err: 1,
      msg: error.message,
    });
  }
};

exports.updateGenre = async (req, res) => {
  try {
    const [updated] = await Genre.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({
        err: 1,
        msg: "Genre not found",
      });
    }
    const genre = await Genre.findByPk(req.params.id);
    res.json({
      err: 0,
      data: genre,
    });
  } catch (error) {
    res.status(400).json({
      err: 1,
      msg: error.message,
    });
  }
};

exports.deleteGenre = async (req, res) => {
  try {
    const deleted = await Genre.destroy({
      where: { id: req.params.id },
    });
    res.json({
      err: deleted ? 0 : 1,
      msg: deleted ? "Genre deleted successfully" : "Genre not found",
    });
  } catch (error) {
    res.status(500).json({
      err: 1,
      msg: error.message,
    });
  }
};
