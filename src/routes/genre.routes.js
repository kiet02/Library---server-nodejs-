const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');
const genreController = require('../controllers/genre.controller');

router.get('/all', genreController.getAllGenres);
router.get('/:name', genreController.getGenreByName);
router.post('/', verifyToken, genreController.createGenre);
router.put('/:id', verifyToken, genreController.updateGenre);
router.delete('/:id', verifyToken, genreController.deleteGenre);

module.exports = router;