import { Controller } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PublicationsService } from '../services/publications.service';
import { CreatePublicationInput } from '../dtos/create-publication-input.dto';
import { PublicationOutput } from '../dtos/create-publication-output.dto';

@Resolver()
@Controller('publications')
export class PublicationsResolver {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Query(() => String)
  findAll() {
    return 'This action returns all publications';
  }

  @Mutation((returns) => PublicationOutput)
  async createPublication(
    @Args('userId') userId: number,
    @Args('createPublicationInput')
    createPublicationInput: CreatePublicationInput,
  ) {
    return await this.publicationsService.create(
      userId,
      createPublicationInput,
    );
  }
}
