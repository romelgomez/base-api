import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from '../../users';

@ObjectType()
export class PublicationOutput {
  @Field()
  id: number;

  @Field()
  categoryId: string;

  @Field()
  locationId: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  isReady: boolean;

  @Field()
  mode: string;

  @Field()
  createdAt: Date;

  @Field()
  modifiedAt: Date;

  @Field({ nullable: true })
  deleteAt?: Date;

  @Field(() => UserEntity)
  user: UserEntity;
}
