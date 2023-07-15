import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, AppConfigService } from './config';
import { UsersModule } from './users';
import { PublicationsModule } from './publications';
import { TypeOrmModule } from '@nestjs/typeorm';

// TODO
// https://www.apollographql.com/docs/apollo-server/api/plugin/landing-pages/

// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { join } from 'path';

@Module({
  imports: [
    ConfigModule,

    TypeOrmModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => {
        const { type, host, port, username, password, database, synchronize } =
          config.getDatabaseConfig();

        return {
          type,
          host,
          port,
          username,
          password,
          database,
          synchronize,
        };
      },
    }),

    UsersModule,
    PublicationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
