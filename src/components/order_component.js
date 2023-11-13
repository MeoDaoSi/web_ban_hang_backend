const {
    getAll,
    getOne,
    edit,
    remove,
    create
} = require('../components/factory/index')

const Order = require('../models/Order')

const order_getAll = getAll(Order)
const order_getOne = getOne(Order)
const order_edit = edit(Order)
const order_remove = remove(Order)
const order_create = create(Order)

module.exports = {
    order_getAll,
    order_getOne,
    order_edit,
    order_remove,
    order_create,
}