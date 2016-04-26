var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/collection/:id', function(req, res) {
  res.render('collection/collection');
})

module.exports  = router;
