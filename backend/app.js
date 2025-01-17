const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productsRoutes')
const wishlistRoutes = require('./routes/wishlistRoutes')
const cartRoutes = require('./routes/cartRoutes');
const cors = require('cors');


module.exports = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors({ origin: 'http://localhost:5173' }));

    app.use(productRoutes);
    app.use('/wishlist', wishlistRoutes);
    app.use('/cart', cartRoutes)


    return app;
}

