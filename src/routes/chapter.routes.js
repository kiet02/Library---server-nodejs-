const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');
const chapterController = require('../controllers/chapter.controller');

router.route('/:BookId/chapters')
    .get(chapterController.getChapters)
    .post(verifyToken, chapterController.addChapter);

router.route('/:BookId/chapters/:chapter')
    .get(chapterController.getChapterContent)
    .put(verifyToken, chapterController.updateChapter)
    .delete(verifyToken, chapterController.deleteChapter);

module.exports = router;
