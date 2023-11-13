const {
    getAll,
    getOne,
    edit,
    remove,
    create
} = require('../components/factory/index')

const Detail = require('../models/Detail')

const detail_getAll = getAll(Detail)
const detail_getOne = getOne(Detail)
const detail_edit = edit(Detail)
const detail_remove = remove(Detail)
const detail_create = create(Detail)

module.exports = {
    detail_getAll,
    detail_getOne,
    detail_edit,
    detail_remove,
    detail_create,
}