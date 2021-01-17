const models = require('../models')

const addUser = (req, res, next) => {
    console.log(res.body);
    models.Users.create({ name: req.body.name })
        .then(User => {
            console.log(User);
            res.json({ status: 'success' })
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
}

const updateUser = (req, res, next) => {
    const user = req.user
    models.Users.update(
        {
            id: req.params.id,
            type: req.body.type
        },
        { where: { id: req.params.id } }
    )
        .then(User => {
            res.json({ status: 'success' })
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
}

const deleteUser = async (req, res, next) => {
    const user = req.user
    models.Users.destroy({
        where: { id: req.params.id }
    })
        .then(() => {
            res.json({ status: 'success' })
        })
        .catch(err => {
            console.log(err)
            next(err)
        })

}

const getUsers = (req, res, next) => {
    models.Users.findAll({
        attributes: ['id', 'name',]
    })
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
}

const getUseriByID = (req, res, next) => {
    models.Users.findOne({
        attributes: ['id', 'name'],
        where: { id: req.params.id }
    })
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
}

module.exports.addUser = addUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
module.exports.getUsers = getUsers
module.exports.getUseriByID = getUseriByID
