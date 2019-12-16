import { ArgsType, Field, Int } from 'type-graphql';
import { Min, Max } from 'class-validator';

@ArgsType()
export class RecipeArgs {
  @Field(() => Int)
  @Min(0)
  skip: number = 0;

  @Field()
  @Min(1)
  @Max(50)
  take: number = 25;
}
