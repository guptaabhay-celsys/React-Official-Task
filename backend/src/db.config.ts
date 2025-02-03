// const app =require('./app');
// const pool = require('./config/pool');

// pool.connect({
//     host: 'ep-bold-dawn-a8u9bbjz.eastus2.azure.neon.tech',
//     port: 5432,
//     database: 'shopifydb',
//     user: "shopifydb_owner",
//     password: "QXp9EVSN6wbx",
//     ssl: { rejectUnauthorized: false }
// })
//     .then(() => {
//         app().listen(3000, () => {
//             console.log(`listening on port 3000`);
//         });
//     })
//     .catch((err) => console.log(err));

import { DataSource } from 'typeorm';
import { Cart } from './entities/cartEntity';
import { Products } from './entities/productEntity';
import { Wishlist } from './entities/wishlistEntity';
import { Users } from './entities/userEntity';
import { Orders } from './entities/orderEntity';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Cel12345",
  database: 'Shopify_Store',
  entities: [ Users, Orders, Products, Cart, Wishlist ],
  synchronize: true,
  logging: true,
});
