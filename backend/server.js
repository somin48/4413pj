import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectToDB from './config/mongodb.js';
import connectToCL from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect to database and cloudinary
connectToDB();
connectToCL();

// Middleware
app.use(express.json());

// Configure CORS
const allowedOrigins = ['http://localhost:5173', 'https://4413pj-front.vercel.app]; // Replace with your actual frontend URLs
app.use(cors({
    origin: allowedOrigins,
    credentials: true, // If using cookies or HTTP authentication
}));

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Health check endpoint
app.get('/', (req, res) => {
    res.send("My backend is running");
});

// Start server
app.listen(port, () => console.log('Server started on PORT: ' + port));
