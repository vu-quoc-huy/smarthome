const express = require('express')
const {
    create_new_user,
    login,
    add_new_house,
    delete_house,
    update_house,
    get_user_by_id,
    add_house
} = require('../controller/userControllet');

const router = express.Router();
router.route('/user')
    .post(create_new_user)
router.route('/user/:id')
    .get(get_user_by_id)
router.route('/login')
    .post(login)
router.route('/house')
    .post(add_new_house)
router.route('/house/:id')
    .put(update_house)
    .delete(delete_house)
    .post(add_house)
module.exports = router