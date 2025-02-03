import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne, 
    CreateDateColumn, 
    JoinColumn
} from "typeorm";
import { Products } from "./productEntity";
import { Users } from "./userEntity";

@Entity("cart")
export class Cart {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Users, (user) => user.wishlist, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "user_id" })
    user!: Users;

    @ManyToOne(() => Products, (product) => product.wishlist)
    @JoinColumn({ name: "product_id" })
    product!: Products;

    @Column({ type: "int", default: 1 })
    quantity!: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    name!: string;

    @Column({ type: "varchar", length: 500, nullable: true })
    image!: string;

    @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
    price!: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;
}
