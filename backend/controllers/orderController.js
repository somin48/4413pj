import orderModel from "../models/ordermodel.js";
import userModel from '../models/userModel.js'
//Place order

//COD
const placeOrderCash = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        //clear cart
        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Your Order is Placed." })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Your Order is not placed. " + error.message })
    }


}

//apple pay
const placeOrderAP = async (req, res) => {


}

//paypal
const placeOrderPP = async (req, res) => {


}

//All Orders Data for a User (frontend)
const userOrders = async (req, res) => {
    try {

        const { userId } = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to get orders.. " + error.message })
    }


}

//update orderstatus (by Admin)
const updateStatus = async (req, res) => {

    try {

        //all data from all users
        const orders = await orderModel.find({})
        res.json({success: true,orders})
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to get All Users' orders.. " + error.message })
    }


}

export { placeOrderAP, placeOrderCash, placeOrderPP, updateStatus, userOrders }