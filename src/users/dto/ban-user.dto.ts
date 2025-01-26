import { IsString, IsNotEmpty } from 'class-validator';

export class BanUserDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    reason: string; 
}