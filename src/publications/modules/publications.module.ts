import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationsService } from '../services/publications.service';
import { PublicationEntity } from '../entities/publication.entity';
import { UserEntity } from '../../users';
import { PublicationsResolver } from '../resolvers/publications.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PublicationEntity])],
  providers: [PublicationsResolver, PublicationsService],
})
export class PublicationsModule {}
