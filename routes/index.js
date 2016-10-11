var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Andrew Arifin' });
});

router.get('/gallery', (req, res, next) => {
  res.render('gallery', {title: 'Photos'})
})

module.exports = router;
