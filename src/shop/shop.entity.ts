import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Shop extends Model<Shop> {
    @Column
    name: string;

    @Column
    description: string;

    @Column
    price: number;

    
}