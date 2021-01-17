var Joi = require('joi');
module.exports.AddorUpdateUser = {
    options: {
        status: 422,
        statusText: 'Unprocessable Entity',
        contextRequest: true
    },
    body: {
        name: Joi.string().required().min(4).trim(),
        id: Joi.number().integer().required(),
       
}
}