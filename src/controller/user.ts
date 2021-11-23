import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Provide,
  ALL,
} from '@midwayjs/decorator';
import { UserService } from '../service/user';
import { ValidationError } from 'joi';
import { CreateUserInput } from '../dto/user';
@Provide()
@Controller('/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Get('/user/:id')
  /** 根据id查询用户信息 */
  async getUserById(@Param() id: number) {
    const user = await this.userService.getUserById(id);
    return {
      success: true,
      message: 'OK',
      data: user ?? {},
    };
  }

  @Post('/create')
  /** 新增用户 */
  async createUser(@Body(ALL) createParam: CreateUserInput) {
    const user = await this.userService.getUserByAccount(createParam.account);
    if (user) {
      return {
        success: false,
        message: 'OK',
        data: '此账号已注册',
      };
    }

    try {
      const user = await this.userService.createUser(createParam);
      return {
        success: true,
        message: 'OK',
        data: user,
      };
    } catch (error) {
      console.log(error);
      if (error instanceof ValidationError) {
        return {
          success: false,
          message: 'Params Validation Error',
          data: {},
        };
      } else {
        return { success: false, message: 'Unknown Errors', data: {} };
      }
    }
  }
}
