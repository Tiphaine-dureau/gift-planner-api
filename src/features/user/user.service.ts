import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { USER_REPOSITORY } from "../../core/utils/constants";
import { UserEntity } from "./user.entity";
import { UserModel } from "./user.model";

@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY)
              private userRepository: Repository<UserEntity>) {
  }

  public async findAll(): Promise<UserModel[]> {
    const users: UserEntity[] = await this.userRepository.find();
    console.warn(users.length);
    return users.map((user: UserEntity) => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
      } as UserModel
    })
  }
}
