import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { Shop } from './shop.entity';
export declare class ShopController {
    private readonly shopService;
    constructor(shopService: ShopService);
    create(shopData: CreateShopDto): Promise<Shop>;
    findAll(): Promise<Shop[]>;
}
