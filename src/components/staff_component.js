const {
    getAll,
    getOne,
    remove,
} = require('../components/factory/index')

const Staff = require('../models/Staff')

const staff_getAll = getAll(Staff)
const staff_getOne = getOne(Staff)
const staff_remove = remove(Staff)

module.exports = {
    staff_getAll,
    staff_getOne,
    staff_remove,
}