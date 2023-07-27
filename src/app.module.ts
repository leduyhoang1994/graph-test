import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './Modules/User/users.module';
import { EduClassesModule } from './Modules/EduClass/eduClasses.module';

@Module({
  imports: [
    EduClassesModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
