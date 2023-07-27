import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { UsersArgs } from './dto/users.args';

@Injectable()
export class UsersService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findOneById(id: string): Promise<User> {
    return {} as any;
  }

  async findAll(recipesArgs: UsersArgs): Promise<User[]> {
    return [] as User[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
