import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationsService } from '../services/publications.service';
import { Publication } from '../entities/publication.entity';
import { User } from '../../users';
import { PublicationsResolver } from '../resolvers/publications.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, Publication])],
  providers: [PublicationsResolver, PublicationsService],
})
export class PublicationsModule {}
