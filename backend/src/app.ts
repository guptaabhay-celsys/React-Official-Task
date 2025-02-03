import express from 'express';
import cors from 'cors';
import { AppDataSource } from './db.config';
import CartRoutes from './routes/cartRoutes';
import WishlistRoutes from './routes/wishlistRoutes';
import UserRoutes from './routes/userRoutes';
import ProductRoutes from './routes/productsRoutes';
import OrderRoutes from './routes/orderRoutes';
import "reflect-metadata";
import verifyToken from './auth/jwtMiddleware';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization', 
};

app.use(cors(corsOptions)); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Working')
})

// Public Routes
app.use(ProductRoutes);
app.use('/user', UserRoutes);

// Protected Routes
app.use('/cart', verifyToken, CartRoutes);
app.use('/wishlist', verifyToken, WishlistRoutes);
app.use('/orders', verifyToken, OrderRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been Initialized!");
    app.listen(3000, () => {
      console.log("Server is running on Port 3000");
    });
  })
  .catch((err) => {
    console.log("Error During Data Source Initialization", err);
  });
