import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { CreateUserInput } from '../dto/user';
import User from '../entity/user';
@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async getUserById(id: number): Promise<User> {
    return await this.userModel.findOne(id);
  }

  async createUser(user: CreateUserInput): Promise<User> {
    return await this.userModel.save(user);
  }

  async getUserByAccount(account: string): Promise<User> {
    return await this.userModel.findOne({
      account,
    });
  }
}
