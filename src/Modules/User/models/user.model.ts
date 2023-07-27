import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  constructor(data: any = {}) {
    this.name = data.name;
  }

  @Field((type) => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  @Directive('@upper')
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  creationDate: Date;

  @Field((type) => [String], { nullable: true })
  ingredients: string[];
}
