import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    Unique, 
    OneToMany
} from "typeorm";
import { Cart } from "./cartEntity";
import { Wishlist } from "./wishlistEntity";
import { Orders } from "./orderEntity";

@Entity("users")
@Unique(["email"])
export class Users {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 100 })
    name!: string;

    @Column({ type: "varchar", length: 255 })
    email!: string;

    @Column({ type: "varchar", length: 255 })
    password!: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at!: Date;

    @OneToMany(() => Cart, (cart) => cart.user)
    cart!: Cart[];

    @OneToMany(() => Wishlist, (wishlist) => wishlist.user)
    wishlist!: Wishlist[];

    @OneToMany(() => Orders, (order) => order.user)
    orders!: Orders[];
}