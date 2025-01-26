import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shop } from './shop.entity';  // Проверьте правильный путь к вашей модели
import { CreateShopDto } from './dto/create-shop.dto';  // Проверьте правильный путь к вашему DTO            

@Injectable()
export class ShopRepository {
  constructor(@InjectModel(Shop) private readonly shopModel: typeof Shop) {}

  async create(data: CreateShopDto): Promise<Shop> {
    // Создаем объект Shop из данных DTO, необязательные поля добавляем по необходимости
    const shop = new Shop();
    shop.name = data.name;
    shop.description = data.description;
    shop.price = data.price;
    // добавьте другие поля модели, если это необходимо

    // Сохранение в базе данных
    return shop.save(); // Используйте save для создания записи
  }

  async findAll(): Promise<Shop[]> {
    return this.shopModel.findAll();
  }

  async findOne(id: number): Promise<Shop | null> {
    return this.shopModel.findOne({ where: { id } });
  }
}