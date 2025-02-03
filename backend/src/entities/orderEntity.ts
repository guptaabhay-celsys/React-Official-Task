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

@Entity("orders")
export class Orders {
    @PrimaryGeneratedColumn()
    order_id!: number;

    @ManyToOne(() => Users, (user) => user.orders, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "user_id" })
    user!: Users;

    @ManyToOne(() => Products, (product) => product.orders, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "product_id" })
    product!: Products;

    @Column({ type: "integer" })
    quantity!: number;

    @Column({ type: "numeric", precision: 10, scale: 2 })
    total_price!: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    order_date!: Date;

    @Column({ type: "text", nullable: true })
    billing_address!: string;

    @Column({ type: "varchar", length: 255 })
    product_name!: string;

    @Column({ type: "varchar", length: 20, default: 'Pending' })
    status!: string;
}
