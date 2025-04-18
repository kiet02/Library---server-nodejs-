const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');
const bookController = require('../controllers/book.controller');

// Admin routes
router.route('/add')
    .post(verifyToken, bookController.addBook);

router.route('/:id')
    .put(verifyToken, bookController.updateBook)
    .delete(verifyToken, bookController.deleteBook)
    .get(bookController.getBookById);

// Basic book routes
router.route('/').get(bookController.getAllBooks);
router.route('/explore/random').get( bookController.getRandomBooks);

// Bookmark routes  
router.route('/save')
    .post(verifyToken, bookController.addBookmark);

router.route('/save/:userId')
    .get(verifyToken, bookController.getBookmarks);

router.route('/save/:bookId')
    .delete(verifyToken, bookController.removeBookmark);

// Review routes
router.route('/review')
    .post(verifyToken, bookController.addReview);

router.route('/:id/review')
    .get(bookController.getBookReviews);

module.exports = router;