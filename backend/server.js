import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectToDB from './config/mongodb.js'
import connectToCL from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App config
const app = express()
const port = process.env.PORT || 4000
connectToDB()
connectToCL()

//middleware
app.use(express.json())
app.use(cors())


//api enpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("This will appear on Postman res body")
})



app.listen(port, () => console.log('Server started on PORT: ' + port))