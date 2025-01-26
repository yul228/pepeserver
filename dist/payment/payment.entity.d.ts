import { Model } from 'sequelize-typescript';
export declare class Payment extends Model<Payment> {
    amount: number;
    status: string;
}
