import { Request, Response } from "express";
import { RecipeDataBase } from "../data/recipeDataBase";
import { MissingFields } from "../error/MissingFields";
import { PermissionDenied } from "../error/PermissionDenied";
import {
  CreateRecipeDTO,
  EditRecipeDTO,
  Recipe,
  RecipeDTO,
} from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/IdGenarator";
import moment from "moment";

export class RecipeBusiness {
  createRecipe = async (recipe: CreateRecipeDTO) => {
    const { recipe_title, recipe_description, token } = recipe;

    if (!recipe_title || !recipe_description) {
      throw new MissingFields();
    }
    const authenticationUser: any = new Authenticator().verifyToken(token);
    if (!authenticationUser) {
      throw new PermissionDenied();
    }

    const recipeDataBase = new RecipeDataBase();

    const recipe_id = new GenerateId().createId();

    const momentDate = new Date();

    const creation_date = moment(momentDate).format("YYYY-MM-DD");

    const newRecipe: Recipe = new Recipe(
      recipe_id,
      recipe_title,
      recipe_description,
      authenticationUser,
      creation_date
    );
    return await recipeDataBase.insertRecipe(newRecipe);
  };

  getRecipeById = async (recipe: RecipeDTO) => {
    const { recipe_id, token } = recipe;

    if (!recipe_id) {
      throw new MissingFields();
    }

    const authenticationUser = new Authenticator().verifyToken(token);
    if (authenticationUser === false) {
      throw new PermissionDenied();
    }

    const newRecipeDataBase = new RecipeDataBase();

    return await newRecipeDataBase.getRecipeById(recipe_id);
  };

  putEditRecipe = async (recipe: EditRecipeDTO) => {
    const { recipe_id, recipe_description, token } = recipe;

    if (!recipe_description || !recipe_id) {
      throw new MissingFields();
    }

    const authenticationUser: any = new Authenticator().verifyToken(token);

    if (authenticationUser === false) {
      throw new PermissionDenied();
    }

    const newRecipeData = new RecipeDataBase();

    const recipeById = await newRecipeData.getRecipeById(recipe_id);

    let result: string = "";

    if (recipeById?.getAuthorId() === authenticationUser) {
      result = await newRecipeData.editRecipe(
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

    const authenticationUser: any = new Authenticator().verifyToken(token);

    if (authenticationUser === false) {
      throw new PermissionDenied();
    }

    const newRecipeData = new RecipeDataBase();

    const recipeById = await newRecipeData.getRecipeById(recipe_id);
    let result: string = "";
    if (
      recipeById?.getAuthorId() === authenticationUser ||
      authenticationUser.role === "ADMIN"
    ) {
      result = await newRecipeData.deleteRecipeById(recipe_id);
    } else {
      throw new PermissionDenied();
    }
    return result;
  };
}
