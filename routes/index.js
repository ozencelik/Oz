var express = require('express');
var router = express.Router();

var Portfolio = require('../models/portfolio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});


router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/portfolio', function(req, res, next) {
  Portfolio.find(function(err, docs){
  	res.render('portfolio', { title: 'Oz-Portfolio', portfolios: docs});
  });
});


router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});




/* AUTH ROUTES */

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});


router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Signin' });
});


module.exports = router;