// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');

// Open Server
var PORT = process.env.PORT || 3000;

var app = express();
//Serve static content for the app 
app.use(express.static('public'));
// app.use(express.static('public'));

// Parse application/
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controllers.js');
app.use(router);



app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});