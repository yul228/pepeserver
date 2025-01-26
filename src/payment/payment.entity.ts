import { Column, Model, Table } from 'sequelize-typescript';

   @Table
   export class Payment extends Model<Payment> {
       @Column
       amount: number;

       @Column
       status: string;
   }