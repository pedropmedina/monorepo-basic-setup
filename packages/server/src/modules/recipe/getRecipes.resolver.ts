import { Resolver, Query, Args } from 'type-graphql';
import { Recipe } from '../../entity/Recipe';
import { RecipeArgs } from './recipe.args';

@Resolver()
export class GetRecipesResolver {
  @Query(() => [Recipe])
  async getRecipes(@Args() { skip, take }: RecipeArgs) {
    return await Recipe.find({ skip, take });
  }
}
