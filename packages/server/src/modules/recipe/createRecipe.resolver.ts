import { Resolver, Mutation, Arg } from 'type-graphql';
import { Recipe } from '../../entity/Recipe';
import { CreateRecipeInput } from './createRecipe.input';

@Resolver()
export class CreateRecipeResolver {
  @Mutation(() => Recipe)
  async createRecipe(@Arg('input') input: CreateRecipeInput): Promise<Recipe> {
    const { title, description, ingredients } = input;
    const recipe = new Recipe();
    recipe.title = title;
    recipe.description = description;
    recipe.ingredients = ingredients;

    return await recipe.save();
  }
}
