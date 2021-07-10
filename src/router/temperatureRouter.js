const express = require('express')
const {
    getAll,
    paginationTemp
} = require('../controller/temperatureController')
const {
    updateStateLed,
    updateStateDoor 
} = require('../controller/ledController')

const router = express.Router();
router.route('/temperature/:limit')
    .get(getAll)
router.route('/temperature/:activePage')
    .get(paginationTemp)
router.route('/led')
    .post(updateStateLed)
router.route('/door')
    .post(updateStateDoor)
module.exports = router