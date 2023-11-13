const {
    getAll,
    getOne,
    remove,
} = require('../components/factory/index')

const User = require('../models/User')

const user_getAll = getAll(User)
const user_getOne = getOne(User)
const user_remove = remove(User)

module.exports = {
    user_getAll,
    user_getOne,
    user_remove,
}