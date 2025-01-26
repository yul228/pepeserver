import { Column, Model, Table } from 'sequelize-typescript';

   @Table
   export class MapMarker extends Model<MapMarker> {
       @Column
       latitude: number;

       @Column
       longitude: number;

       @Column
       label: string;
   }