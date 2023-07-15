import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../services/users.service';
import { UserEntity } from '../entities/user.entity';
import { PublicationEntity } from '../../publications';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PublicationEntity])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
