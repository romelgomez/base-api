import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { Publication } from '../../publications';

@Module({
  imports: [TypeOrmModule.forFeature([User, Publication])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
