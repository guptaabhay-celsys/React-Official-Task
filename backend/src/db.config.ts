import { DataSource } from 'typeorm';
import { Cart } from './entities/cartEntity';
import { Products } from './entities/productEntity';
import { Wishlist } from './entities/wishlistEntity';
import { Users } from './entities/userEntity';
import { Orders } from './entities/orderEntity';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ep-bold-dawn-a8u9bbjz.eastus2.azure.neon.tech",
  port: 5432,
  username: "shopifydb_owner",
  password: "QXp9EVSN6wbx",
  database: 'shopifydb',
  entities: [ Users, Orders, Products, Cart, Wishlist ],
  ssl: { rejectUnauthorized: false },
  synchronize: true,
});
