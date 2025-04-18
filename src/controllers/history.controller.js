const { History } = require('../models');

// History operations
exports.updateHistory = async (req, res) => {
    try {
        const { BookId , chapter, complete, value } = req.body;
        const [history, created] = await History.findOrCreate({
            where: {
                UserId : req.user.id,
                BookId 
            },
            defaults: {
                chapter,
                complete,
                value
            }
        });

        if (!created) {
            await history.update({
                chapter,
                complete,
                value
            });
        }

        res.json({ err: 0, data: history });
    } catch (error) {
        res.status(500).json({ err: 1, msg: error.message });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const history = await History.findAll({
            where: { UserId : req.user.id },
            // include: [{ model: Book }]
        });
        res.json({
            err: history.length ? 0 : 1,
            data: history.length ? history : 'No reading history found'
        });
    } catch (error) {
        res.status(500).json({ err: 1, msg: error.message });
    }
};

exports.deleteHistory = async (req, res) => {
    try {
        const { BookId } = req.body;
        const result = await History.destroy({
            where: { UserId : req.user.id, BookId }
        });

        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'History not found'
            });
        }

        res.json({
            success: true,
            message: 'Reading history deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.addHistory = async (req, res) => {
    try {
        const { BookId,chapter,value } = req.body;
    
        // Check if history already exists
        const existingHistory = await History.findOne({
            where: {
                UserId : req.user.id,
                BookId,
                chapter,
                value

            }
        });

        if (existingHistory) {
            return res.status(400).json({
                success: false,
                message: 'History already exists for this book'
            });
        }

        // Create new history
        const history = await History.create({
            UserId : req.user.id,
           
            BookId,
            chapter,
            value
        });

        res.status(201).json({
            success: true,
            message: 'Reading history created successfully',
            data: history
        });
    } catch (error) {
        res.status(500).json({
            success: 'false',
            message: error.message
        });
    }
};
