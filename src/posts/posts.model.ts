import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model"; // Если необходимо, убедитесь, что правильно импортируете роль
import {User} from "../users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image?: string; // Сделаем опциональным
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Unique identifier for the post' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'My First Post', description: 'Title of the post' })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({ example: 'This is the content of the post', description: 'Content of the post' })
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({ example: 'image.png', description: 'Image file name associated with the post' })
    @Column({type: DataType.STRING, allowNull: true})
    image: string;

    @ApiProperty({ example: 1, description: 'User ID of the post author' })
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User;

    // Добавьте сюда дополнительные поля или методы, если необходимо
}