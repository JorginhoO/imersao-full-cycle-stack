/* eslint-disable prettier/prettier */
import { Product } from 'src/products/entities/product.entity';
import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed',
}

export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  total: number;

  @Column()
  cliente_id: number;

  @Column()
  status: OrderStatus = OrderStatus.PENDING;

  @CreateDateColumn()
  created_at: Date;
}

export class OrderItem {
  @PrimaryGeneratedColumn()  
  id: number;
  
  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  product_id: string;

  @ManyToOne(() => Order)
  order: Order;
}
