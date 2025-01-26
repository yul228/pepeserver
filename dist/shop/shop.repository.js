"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const shop_entity_1 = require("./shop.entity");
let ShopRepository = class ShopRepository {
    constructor(shopModel) {
        this.shopModel = shopModel;
    }
    async create(data) {
        const shop = new shop_entity_1.Shop();
        shop.name = data.name;
        shop.description = data.description;
        shop.price = data.price;
        return shop.save();
    }
    async findAll() {
        return this.shopModel.findAll();
    }
    async findOne(id) {
        return this.shopModel.findOne({ where: { id } });
    }
};
exports.ShopRepository = ShopRepository;
exports.ShopRepository = ShopRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(shop_entity_1.Shop)),
    __metadata("design:paramtypes", [Object])
], ShopRepository);
//# sourceMappingURL=shop.repository.js.map