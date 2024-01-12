const router = require('express').Router()
const book = require('../controllers')
router.get('/all',book.GetBookAll)
router.get('/',book.GetBook)
router.get('/savebook',book.GetSaveBook)
router.get('/Delete',book.deleteSaveBook)
router.get('/Chapter',book.GetChapter)
router.get('/Comment',book.GetBookReview)
router.get('/setht',book.SetHistories)
router.get('/getht',book.GetHistories)













module.exports = router