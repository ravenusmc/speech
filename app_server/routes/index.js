var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* Routes */
router.get('/', ctrlMain.index);
router.get('/getty', ctrlMain.getty);
router.get('/dream', ctrlMain.dream);
router.get('/military', ctrlMain.military);

module.exports = router;
