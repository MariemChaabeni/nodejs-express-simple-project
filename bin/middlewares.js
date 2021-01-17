
module.exports.check_ENV = function (req, res, next) {
  return req.app.get('env') === 'development'
    ? next()
    : res.send('<H1> 404 Not Found </H1>')
}


