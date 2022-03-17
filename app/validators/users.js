const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')

const validateCreateUser = [ 
    check('name')
        .exists()
        .not()     
        .isEmpty(),
    check('age')
        .exists()
        .isNumeric(),
    check('email')
        .exists()
        .isEmail(),
    check('password')
        .exists()
        .not()     
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreateUser }