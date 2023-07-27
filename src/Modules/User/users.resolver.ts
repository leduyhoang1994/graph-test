import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User)
  User(@Args('name') name: string): User {
    return new User({
      name: name,
    });
  }

  @Query(() => [User])
  Users(): Array<User> {
    return [new User()];
  }
}
