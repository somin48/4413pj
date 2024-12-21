import express from 'express'

import { placeOrderAP, placeOrderCash, placeOrderPP, updateStatus, userOrders } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authU from '../middleware/authUser.js'

const orderRouter = express.Router()

//Admin
orderRouter.post('/list', adminAuth, userOrders)
orderRouter.post('/status', adminAuth, updateStatus)



//Payment
orderRouter.post('/place', authU, placeOrderCash)
orderRouter.post('/applepay', authU, placeOrderAP)
orderRouter.post('/paypal', authU, placeOrderPP)


//User
orderRouter.post('/userorders', authU, userOrders)

export default orderRouter