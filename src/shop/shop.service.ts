import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { ShopRepository } from './shop.repository'; // Импортируйте ваш репозиторий
import { CreateShopDto } from './dto/create-shop.dto';
import { Shop } from './shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @Inject(forwardRef(() => ShopRepository)) // Используйте forwardRef, если есть циклическая зависимость
    private readonly shopRepository: ShopRepository,
  ) {}

  async create(shopData: CreateShopDto): Promise<Shop> {
    return this.shopRepository.create(shopData);
  }

  async findAll(): Promise<Shop[]> {
    return this.shopRepository.findAll();
  }

  // Добавьте другие методы по мере необходимости
}