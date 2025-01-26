// src/roles/user-roles.model.ts

import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Role } from "./roles.model";

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
}

// Просто экспортируем класс напрямую, без второй декларации
export default UserRoles;
