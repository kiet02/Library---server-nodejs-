const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');
const authorController = require('../controllers/author.controller');

router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/create', verifyToken, authorController.createAuthor);
router.put('/:id', verifyToken, authorController.updateAuthor);
router.delete('/:id', verifyToken, authorController.deleteAuthor);

module.exports = router;