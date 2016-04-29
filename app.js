var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var seedDB      = require('./seed');

// Ports
var port = process.env.port || 4000;
var portIP = process.env.IP;

// Models
var Porsche = require('./models/porscheModel');

// Routes
var collectionRoutes = require('./routes/collectionRoutes');

mongoose.connect('mongodb://localhost/porsche_data');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

// Seed Database with Intventory Items
seedDB();

app.get('/', function(req, res) {
  res.redirect('/home');
})

app.get('/home', function(req, res) {
  Porsche.find({}, function(err, invItems) {
    if(err) {
      console.log(err);
    } else {
      res.render('index', {items: invItems});
    }
  })
})

app.use('/', collectionRoutes);

app.listen(port, portIP, function(server){
  console.log('Server has started...');
})
