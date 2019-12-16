import { InputType, Field } from 'type-graphql';
import { MaxLength, Length, ArrayMaxSize } from 'class-validator';

@InputType()
export class CreateRecipeInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(5, 255)
  description?: string;

  @Field(() => [String])
  @ArrayMaxSize(30)
  ingredients: string[];
}
