import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PublicationEntity } from '../entities/publication.entity';
import { UserEntity } from '../../users';
import { CreatePublicationInput } from '../dtos/create-publication-input.dto';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(PublicationEntity)
    private publicationRepository: Repository<PublicationEntity>,
  ) {}

  async create(
    userId: number,
    createPublicationInput: CreatePublicationInput,
  ): Promise<PublicationEntity | null> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    const publication = this.publicationRepository.create({
      ...createPublicationInput,
      user,
    });

    await this.publicationRepository.save(publication);

    return await this.publicationRepository.findOne({
      where: { id: publication.id },
      relations: ['user'],
    });

    return null;
  }
}
