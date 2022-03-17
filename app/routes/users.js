const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/users')
const { validateCreateUser } = require('../validators/users')

router.get('/', getItems)

router.get('/:id', checkOrigin, getItem)

//TODO: Donde recibimos data
router.post('/', validateCreateUser, createItem)

router.patch('/:id', validateCreateUser, updateItem)

router.delete('/:id', deleteItem)


module.exports = router