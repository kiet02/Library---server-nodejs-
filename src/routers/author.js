const router = require('express').Router()
const author = require('../controllers')

router.get(`/`,author.GetAuthorAll)
// router.get(`/:author`,author.GetAuthor)




module.exports = router