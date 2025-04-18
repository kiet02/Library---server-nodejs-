const { SaveBook, Book } = require('../models');

exports.addBookmark = async (req, res) => {
    try {
        const { UserId, idBook } = req.body;
        const bookmark = await SaveBook.create({ UserId, idBook });
        res.status(201).json({
            err: 0,
            msg: 'Book saved successfully',
            data: bookmark
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.getBookmarks = async (req, res) => {
    try {
        const bookmarks = await SaveBook.findAll({
            where: { UserId: req.user.id },
            include: [{ model: Book }]
        });
        res.json({
            err: 0,
            data: bookmarks
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.removeBookmark = async (req, res) => {
    try {
        const { idBook } = req.params;
        const deleted = await SaveBook.destroy({
            where: {
                UserId: req.user.id,
                idBook
            }
        });
        res.json({
            err: deleted ? 0 : 1,
            msg: deleted ? 'Bookmark removed' : 'Bookmark not found'
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};