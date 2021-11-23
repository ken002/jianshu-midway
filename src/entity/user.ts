import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@EntityModel()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
