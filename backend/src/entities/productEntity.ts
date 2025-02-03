import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany
} from "typeorm";
import { Cart } from "./cartEntity";
import { Wishlist } from "./wishlistEntity";
import { Orders } from "./orderEntity";

@Entity("products")
export class Products {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 150 })
    name!: string;

    @Column({ type: "text", nullable: true })
    description!: string;

    @Column({ type: "numeric", precision: 10, scale: 2 })
    price!: number;

    @Column({ type: "int", default: 0 })
    stock!: number;

    @Column({ type: "text", nullable: true })
    image_url!: string;

    @Column({
        type: "varchar",
        length: 50,
        enum: ["Casuals", "Dress", "Sports"],
    })
    category!: string;

    @Column({
        type: "varchar",
        length: 50,
        enum: ["Nike", "Adidas", "Merrell", "Gucci", "Skechers", "Others"],
    })
    brand_name!: string;

    @Column("int", { array: true, nullable: true })
    available_sizes!: number[];

    @Column("text", { array: true, nullable: true })
    colors_available!: string[];

    @Column({
        type: "varchar",
        length: 20,
        enum: ["Leather", "Suede"],
    })
    material!: string;

    @Column({
        type: "varchar",
        length: 10,
        enum: ["Male", "Female"],
    })
    gender!: string;

    @Column({
        type: "varchar",
        length: 50,
        enum: ["BioBevel", "Groove", "FlexBevel"],
        nullable: true,
    })
    technology!: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at!: Date;

    @OneToMany(() => Cart, (cart) => cart.product)
    cart!: Cart[];

    @OneToMany(() => Wishlist, (wishlist) => wishlist.product)
    wishlist!: Wishlist[];

    @OneToMany(() => Orders, (order) => order.product)
    orders!: Orders[];
}

