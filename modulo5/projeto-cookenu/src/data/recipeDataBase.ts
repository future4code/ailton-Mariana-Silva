import { Recipe } from "../model/Recipe";
import { dataBase } from "./dataBase";

export class RecipeDataBase extends dataBase {
  insertRecipe = async (recipe: Recipe): Promise<string> => {
    await this.getConnection()
      .insert({
        recipe_id: recipe.getId(),
        recipe_title: recipe.getTitle(),
        recipe_description: recipe.getDescription(),
        author_id: recipe.getAuthorId(),
        creation_date: recipe.getCreationDate(),
      })
      .into("cookenu_recipes");

    return `Recipe created successfully`;
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
        result[0].author_id,
        result[0].creation_id
      );
      return recipe;
    }
  };

  editRecipe = async (
    recipe_id: string,
    recipe_description: string,
    author_id: string
  ): Promise<string> => {
    const result = await this.getConnection()
      .update({ recipe_description })
      .from("cookenu_recipes")
      .where({ recipe_id })
      .andWhere({ author_id });

    return `Recipe updated successfully`;
  };

  deleteRecipeById = async (recipe_id: string): Promise<string> => {
    const result = await this.getConnection()
      .delete("*")
      .from("cookenu_recipes")
      .where({ recipe_id });

    return `Recipe deleted successfully`;
  };

  deleteRecipeByAuthor = async (author_id: string): Promise<string> => {
    const result = await this.getConnection()
      .delete("*")
      .from("cookenu_recipes")
      .where({ author_id });

    return `Recipe deleted successfully`;
  };
}
