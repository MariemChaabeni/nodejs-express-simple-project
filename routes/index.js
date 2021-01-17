var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS APP' });
});


const routes = () => {
  require('./users').user(router)
  return router
}


module.exports = routes()
  