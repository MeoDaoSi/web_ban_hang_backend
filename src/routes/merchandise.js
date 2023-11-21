const express = require('express')
const router = express.Router();

const {
    merchandise_getAll,
    merchandise_getOne,
    merchandise_edit,
    merchandise_remove,
    merchandise_create, 
} = require('../components/merchandise_component')

router.post('/',merchandise_create)
router.get('/',merchandise_getAll)
router.get('/:id',merchandise_getOne)
router.patch('/:id',merchandise_edit)
router.delete('/:id',merchandise_remove)

module.exports = router