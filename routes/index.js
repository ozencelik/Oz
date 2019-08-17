var express = require('express');
var router = express.Router();

var Portfolio = require('../models/portfolio');
var rootFilePath = require('app-root-path');

var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/', function(req, res, next) {
  Portfolio.find(function(err, docs){
    res.render('index', { title: 'Home', portfolios: docs});
  });
});
/////////////////////////////////////////////////////

router.get('/downloadcv', function(req, res){
  var file = rootFilePath+'/files/Özenç Çelik - Resume.pdf';
  res.download(file);
});

////////////////////////////////////////////////////
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
  res.render('signup', { csrfProtection: req.csrfToken, title: 'Signup' });
});
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Signin' });
});


module.exports = router;
