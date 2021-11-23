import { Controller, Get, Inject, Param, Provide } from '@midwayjs/decorator';
import { UserService } from '../service/user';

@Provide()
@Controller('/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Get('/user/:id')
  async getUserById(@Param() id: number) {
    const user = await this.userService.getUserById(id);
    return {
      success: true,
      message: 'OK',
      data: user ?? {},
    };
  }
}
