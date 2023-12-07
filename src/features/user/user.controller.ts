import { Controller, Get } from '@nestjs/common';

import { UserService } from "./user.service";
import { UserModel } from "./user.model";

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get()
  public users(): Promise<UserModel[]> {
    return this.userService.findAll();
  }
}
