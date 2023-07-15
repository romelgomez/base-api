import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publication } from '../entities/publication.entity';
import { User } from '../../users';
import { CreatePublicationInput } from '../dtos/create-publication-input.dto';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
  ) {}

  async create(
    userId: number,
    createPublicationInput: CreatePublicationInput,
  ): Promise<Publication | null> {
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
