import { Module } from '@nestjs/common';
import { Args, Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType({ description: 'class' })
export class EduClass {
  @Field({ nullable: true })
  name: string;
}

@Resolver((of) => EduClass)
export class EduClassResolver {
  @Query((returns) => EduClass)
  EduClass(@Args('name') name: string): EduClass {
    return new EduClass();
  }
}

@Module({
  providers: [EduClassResolver],
})
export class EduClassesModule {}
