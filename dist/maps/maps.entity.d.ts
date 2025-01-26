import { Model } from 'sequelize-typescript';
export declare class MapMarker extends Model<MapMarker> {
    latitude: number;
    longitude: number;
    label: string;
}
