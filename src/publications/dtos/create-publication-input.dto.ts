import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsBoolean } from 'class-validator';

@InputType()
export class CreatePublicationInput {
  @Field()
  @IsString()
  categoryId: string;

  @Field()
  @IsString()
  locationId: string;

  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsBoolean()
  isReady: boolean;

  @Field()
  @IsString()
  mode: string;
}
