const { BookReview, User } = require('../models');

exports.addReview = async (req, res) => {
    try {
        const { idBook, comment, rate } = req.body;
        const review = await BookReview.create({
            UserId: req.user.id,
            idBook,
            comment,
            rate
        });
        res.status(201).json({
            err: 0,
            data: review
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.getBookReviews = async (req, res) => {
    try {
        const { idBook } = req.params;
        const reviews = await BookReview.findAll({
            where: { idBook },
            include: [{
                model: User,
                attributes: ['name', 'image']
            }]
        });
        res.json({
            err: 0,
            data: reviews
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await BookReview.destroy({
            where: {
                id,
                UserId: req.user.id
            }
        });
        res.json({
            err: deleted ? 0 : 1,
            msg: deleted ? 'Review deleted' : 'Review not found'
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};