var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tree', { title: 'Search Results followed by tree' });
});

module.exports = router;
