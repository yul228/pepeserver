import { Controller, Get, Post, Body } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto'; // импортируйте ваш DTO
import { Shop } from './shop.entity';

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Post()
    create(@Body() shopData: CreateShopDto): Promise<Shop> { // измените тип на CreateShopDto
        return this.shopService.create(shopData);
    }

    @Get()
    findAll(): Promise<Shop[]> {
        return this.shopService.findAll();
    }
}