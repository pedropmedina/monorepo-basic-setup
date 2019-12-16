import { Resolver, Query, Arg } from 'type-graphql';
import { Recipe } from '../../entity/Recipe';

@Resolver()
export class GetRecipeResover {
  @Query(() => Recipe, { nullable: true })
  async getRecipe(@Arg('id') id: string) {
    const recipe = await Recipe.findOne(id);
    if (recipe === undefined) {
      throw new Error('No recipe found with given id');
    }
    return recipe;
  }
}
