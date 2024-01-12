const router = require('express').Router()
const genre= require('../controllers')

router.get(`/`,genre.GetGenreAll)
router.get(`/:genre`,genre.GetGenre)




module.exports = router