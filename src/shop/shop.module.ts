import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShopService } from './shop.service';
import { ShopRepository } from './shop.repository';
import { Shop } from './shop.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Shop]),
   
  ],
  providers: [ShopService, ShopRepository],
  exports: [ShopService],  
})
export class ShopModule {}