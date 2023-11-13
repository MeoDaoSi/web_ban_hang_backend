const {
    getAll,
    getOne,
    edit,
    remove,
    create
} = require('../components/factory/index')

const Merchandise = require('../models/Merchandise')

const merchandise_getAll = getAll(Merchandise)
const merchandise_getOne = getOne(Merchandise)
const merchandise_edit = edit(Merchandise)
const merchandise_remove = remove(Merchandise)
const merchandise_create = create(Merchandise)

module.exports = {
    merchandise_getAll,
    merchandise_getOne,
    merchandise_edit,
    merchandise_remove,
    merchandise_create,
}