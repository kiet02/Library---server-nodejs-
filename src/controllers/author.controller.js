const { Author, Book } = require('../models');

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll({
            include: [{
                model: Book,
                attributes: ['id', 'name']
            }]
        });
        res.json({
            err: authors.length ? 0 : 1,
            data: authors.length ? authors : 'No authors found'
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id, {
            include: [{
                model: Book,
                attributes: ['id', 'name', 'img']
            }]
        });
        res.json({
            err: author ? 0 : 1,
            data: author || 'Author not found'
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.createAuthor = async (req, res) => {
    try {

        const author = await Author.create(req.body);
        res.status(201).json({
            err: 0,
            data: author
        });
    } catch (error) {
        res.status(400).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.updateAuthor = async (req, res) => {
    try {
        const [updated] = await Author.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({
                err: 1,
                msg: 'Author not found'
            });
        }
        const author = await Author.findByPk(req.params.id);
        res.json({
            err: 0,
            data: author
        });
    } catch (error) {
        res.status(400).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.deleteAuthor = async (req, res) => {
    try {
        const deleted = await Author.destroy({
            where: { id: req.params.id }
        });
        res.json({
            err: deleted ? 0 : 1,
            msg: deleted ? 'Author deleted successfully' : 'Author not found'
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};