import { ShopRepository } from './shop.repository';
import { CreateShopDto } from './dto/create-shop.dto';
import { Shop } from './shop.entity';
export declare class ShopService {
    private readonly shopRepository;
    constructor(shopRepository: ShopRepository);
    create(shopData: CreateShopDto): Promise<Shop>;
    findAll(): Promise<Shop[]>;
}
