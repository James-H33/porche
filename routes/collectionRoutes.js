var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Porsche = require('../models/porscheModel');


router.get('/collection/:id', function(req, res) {
  Porsche.findById(req.params.id, function(err, invItem) {
    if(err) {
      console.log(err);
    } else {
      res.render('collection/collection', {item: invItem});
    }
  })
})


module.exports  = router;
