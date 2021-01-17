const usersController = require('../controllers/usersController')
const uservalidation = require('../validations/userValidation')
var validate = require('express-validation')

module.exports.user = function (router) {

  router
    .route('/users')
    .post(
      // validate(uservalidation.AddorUpdateUser),
      usersController.addUser
    )
    .get(usersController.getUsers)

  router
    .route('/users/:id')
    .delete(usersController.deleteUser)
    .put(
      // validate(civilityvalidation.AddorUpdateUser),
      usersController.updateUser
    )
    .get(usersController.getUseriByID)

}
