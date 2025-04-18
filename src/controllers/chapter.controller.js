const { Chapter } = require('../models');

exports.getChapters = async (req, res) => {
    try {
        const { BookId } = req.params;
        const chapters = await Chapter.findAll({
            where: { BookId },
            order: [['chapter', 'ASC']]
        });
        res.json({
            err: 0,
            data: chapters
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.getChapterContent = async (req, res) => {
    try {
        const { idBook, chapter } = req.params;
        const chapterData = await Chapter.findOne({
            where: { idBook, chapter }
        });
        res.json({
            err: chapterData ? 0 : 1,
            data: chapterData || 'Chapter not found'
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.addChapter = async (req, res) => {
    try {
        const { BookId, chapter, content } = req.body;
        const newChapter = await Chapter.create({
            BookId,
            chapter,
            content
        });
        res.status(201).json({
            err: 0,
            data: newChapter
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.updateChapter = async (req, res) => {
    try {
        const { BookId, chapter } = req.params;
        const { content, newChapterNumber } = req.body;

        // Find the chapter
        const chapterToUpdate = await Chapter.findOne({
            where: { BookId, chapter }
        });

        if (!chapterToUpdate) {
            return res.status(404).json({
                err: 1,
                msg: 'Chapter not found'
            });
        }

        // Update chapter
        await chapterToUpdate.update({
            chapter: newChapterNumber || chapter,
            content: content || chapterToUpdate.content
        });

        res.json({
            err: 0,
            msg: 'Chapter updated successfully',
            data: chapterToUpdate
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.deleteChapter = async (req, res) => {
    try {
        const { BookId, chapter } = req.params;

        const result = await Chapter.destroy({
            where: { BookId, chapter }
        });

        if (!result) {
            return res.status(404).json({
                err: 1,
                msg: 'Chapter not found'
            });
        }

        res.json({
            err: 0,
            msg: 'Chapter deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};