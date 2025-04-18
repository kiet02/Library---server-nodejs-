const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');
const HistoryController = require('../controllers/history.controller');


router.route('/add')
    .post(verifyToken, HistoryController.addHistory);

router.route('/get')
    .get(verifyToken, HistoryController.getHistory)

router.route('/update')
    .post(verifyToken, HistoryController.updateHistory)

router.route('/delete')
    .delete(verifyToken, HistoryController.deleteHistory)

module.exports = router;