import { RecipeDataBase } from "../data/recipeDataBase";
import { MissingFields } from "../error/MissingFields";
import { PermissionDenied } from "../error/PermissionDenied";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/IdGenarator";
import moment from "moment";
import {
  CreateRecipeDTO,
  EditRecipeDTO,
  Recipe,
  RecipeDTO,
} from "../model/Recipe";

export class RecipeBusiness {
  constructor(
    private recipeDataBase: RecipeDataBase,
    private generateId: GenerateId,
    private authenticator: Authenticator
  ) {}
  createRecipe = async (recipe: CreateRecipeDTO) => {
    const { recipe_title, recipe_description, token } = recipe;

    if (!recipe_title || !recipe_description) {
      throw new MissingFields();
    }
    const authenticationUser: any = this.authenticator.verifyToken(token);
    if (!authenticationUser) {
      throw new PermissionDenied();
    }

    const recipe_id = this.generateId.createId();

    const momentDate = new Date();

    const creation_date = moment(momentDate).format("YYYY-MM-DD");

    const newRecipe: Recipe = new Recipe(
      recipe_id,
      recipe_title,
      recipe_description,
      authenticationUser,
      creation_date
    );
    return await this.recipeDataBase.insertRecipe(newRecipe);
  };

  getRecipeById = async (recipe: RecipeDTO) => {
    const { recipe_id, token } = recipe;

    if (!recipe_id) {
      throw new MissingFields();
    }

    const authenticationUser = this.authenticator.verifyToken(token);
    if (authenticationUser === false) {
      throw new PermissionDenied();
    }

    return await this.recipeDataBase.getRecipeById(recipe_id);
  };

  putEditRecipe = async (recipe: EditRecipeDTO) => {
    const { recipe_id, recipe_description, token } = recipe;

    if (!recipe_description || !recipe_id) {
      throw new MissingFields();
    }

    const authenticationUser: any = this.authenticator.verifyToken(token);

    if (authenticationUser === false) {
      throw new PermissionDenied();
    }

    const recipeById = await this.recipeDataBase.getRecipeById(recipe_id);

    let result: string = "";

    if (recipeById?.getAuthorId() === authenticationUser) {
      result = await this.recipeDataBase.editRecipe(
        recipe_id,
        recipe_description,
        authenticationUser
      );
    } else {
      throw new PermissionDenied();
    }
    return result;
  };

  deleteRecipe = async (recipe: RecipeDTO) => {
    const { recipe_id, token } = recipe;

    if (!recipe_id) {
      throw new MissingFields();
    }

    const authenticationUser: any = this.authenticator.verifyToken(token);

    if (authenticationUser === false) {
      throw new PermissionDenied();
    }

    const recipeById = await this.recipeDataBase.getRecipeById(recipe_id);
    let result: string = "";
    if (
      recipeById?.getAuthorId() === authenticationUser ||
      authenticationUser.role === "ADMIN"
    ) {
      result = await this.recipeDataBase.deleteRecipeById(recipe_id);
    } else {
      throw new PermissionDenied();
    }
    return result;
  };
}
