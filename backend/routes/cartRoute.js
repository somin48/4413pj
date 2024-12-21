import express from 'express'
import { addToCart, updateCart, getCurrCart } from '../controllers/cartController.js' //have to manually add .js in the end 
import authU from '../middleware/authUser.js'

const cartRouter = express.Router()

cartRouter.post('/get', authU, getCurrCart)
cartRouter.post('/add', authU, addToCart)
cartRouter.post('/update', authU, updateCart)

export default cartRouter

