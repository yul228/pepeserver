import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService
    ) {}

    async createUser(dto: CreateUserDto) {
        try {
            const user = await this.userRepository.create(dto);
            const role = await this.roleService.getRoleByValue("ADMIN");

            if (!role || !role.id) {
                throw new HttpException('Role ADMIN not found', HttpStatus.NOT_FOUND);
            }

            await user.$set('roles', [role.id]);
            user.roles = [role];
            
            return user;
        } catch (error) {
            throw new HttpException('Error creating user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({ where: { id }, include: { all: true } });
        return user;
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);

        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        if (!role) {
            throw new HttpException('Role not found', HttpStatus.NOT_FOUND);
        }

        await user.$add('role', role.id);
        return dto;
    }

    async banUser(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        
        user.banned = true;
        user.banReason = dto.reason;
        await user.save();
        
        return user;
    }
}