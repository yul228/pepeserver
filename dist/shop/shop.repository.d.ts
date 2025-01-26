import { Shop } from './shop.entity';
import { CreateShopDto } from './dto/create-shop.dto';
export declare class ShopRepository {
    private readonly shopModel;
    constructor(shopModel: typeof Shop);
    create(data: CreateShopDto): Promise<Shop>;
    findAll(): Promise<Shop[]>;
    findOne(id: number): Promise<Shop | null>;
}
