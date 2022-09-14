import { Recipe } from "../model/Recipe";
import { dataBase } from "./dataBase";

export class RecipeDataBase extends dataBase {
  createRecipe = async (recipe: Recipe): Promise<string> => {
    await this.getConnection()
      .insert({
        recipe_id: recipe.getId(),
        recipe_title: recipe.getTitle(),
        recipe_description: recipe.getDescription(),
        author_id: recipe.getAuthorId(),
      })
      .into("cookenu_recipes");

    return `Recipe ${recipe.getTitle()} created successfully`;
  };

  getRecipeById = async (recipe_id: string): Promise<Recipe | undefined> => {
    const result = await this.getConnection()
      .select("*")
      .from("cookenu_recipes")
      .where({ recipe_id });

    if (!result.length) {
      return undefined;
    } else {
      const recipe = new Recipe(
        result[0].recipe_id,
        result[0].recipe_title,
        result[0].recipe_description,
        result[0].author_id
      );
      return recipe;
    }
  };
}
