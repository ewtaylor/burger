var express = require('express');
var router = express()
var burger = require('../models/burger.js');

//Setup Routes
// router.get('/', function (req, res) 
// {
//   res.redirect('/index');
// });

router.get('/', function (req, res) 
{
  burger.selectAll(function(data) 
  {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// Create a Burger
router.post('/burger/create', function (req, res) 
{
  burger.insertOne(req.body.burger_name, function() 
  {
    res.redirect('/') 
  });
});

// Devour a Burger
router.post('/burger/eat/:id', function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect('/');
  });
});

// Export routes
module.exports = router