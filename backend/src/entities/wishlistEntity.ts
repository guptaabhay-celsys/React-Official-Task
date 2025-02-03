import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    ManyToOne, 
    JoinColumn 
} from "typeorm";
import { Products } from "./productEntity";  
import { Users } from "./userEntity";  

@Entity("wishlist")
export class Wishlist {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Users, (user) => user.wishlist, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "user_id" })
    user!: Users;

    @ManyToOne(() => Products, (product) => product.wishlist)
    @JoinColumn({ name: "product_id" })
    product!: Products;

    @Column({ type: "varchar", length: 255, nullable: true })
    name!: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    image!: string;

    @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
    price!: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;
}
