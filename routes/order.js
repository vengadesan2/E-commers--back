const express = require('express');
const { newOrder, getSingleOrder, myOrders, orders, updateOrder, deleteOrder } = require('../controller/OrderController');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/authenticate');

router.route('/order/new').post(newOrder);
router.route('/order/:id').get(getSingleOrder);
router.route('/myorders').get(myOrders);

//Admin Routes
router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles('admin'), orders)
router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder)
                        .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder)

module.exports = router;