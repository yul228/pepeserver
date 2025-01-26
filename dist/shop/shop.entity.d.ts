import { Model } from 'sequelize-typescript';
export declare class Shop extends Model<Shop> {
    name: string;
    description: string;
    price: number;
}
