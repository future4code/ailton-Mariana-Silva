import { Request, Response } from "express";
import { RecipeDataBase } from "../data/recipeDataBase";
import { MissingFields } from "../error/MissingFields";
import { PermissionDenied } from "../error/PermissionDenied";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/IdGenarator";
import moment from "moment";

export class recipeEndpoint {
  createRecipe = async (req: Request, res: Response) => {
    try {
      const { recipe_title, recipe_description } = req.body;

      if (!recipe_title || !recipe_description) {
        throw new MissingFields();
      }

      const token = req.headers.authorization!;
      const authenticationUser: any = new Authenticator().verifyToken(token);

      if (!authenticationUser) {
        throw new PermissionDenied();
      }

      const recipeDataBase = new RecipeDataBase();

      const recipe_id = new GenerateId().createId();

      const momentDate = new Date();

      const creation_date = moment(momentDate).format("YYYY-MM-DD");

      const newRecipe = new Recipe(
        recipe_id,
        recipe_title,
        recipe_description,
        authenticationUser,
        creation_date
      );

      const result = await recipeDataBase.createRecipe(newRecipe);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  getReciveById = async (req: Request, res: Response) => {
    try {
      const recipe_id = req.params.recipe_id;
      const token = req.headers.authorization!;

      if (!recipe_id) {
        throw new MissingFields();
      }

      const authenticationUser = new Authenticator().verifyToken(token);
      if (authenticationUser === false) {
        throw new PermissionDenied();
      }

      const newRecipeDataBase = new RecipeDataBase();

      const recipeById = await newRecipeDataBase.getRecipeById(recipe_id);

      res.status(200).send({
        message: {
          recipes_id: recipeById?.getId(),
          recipes_title: recipeById?.getTitle(),
          recipes_description: recipeById?.getDescription(),
        },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  putEditRecipe = async (req: Request, res: Response) => {
    try {
      const { recipe_id, recipe_description } = req.body;
      const token = req.headers.authorization!;

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
      console.log(result);
      res.status(200).send({
        message: result,
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  async deleteRecipe(req: Request, res: Response) {
    try {
      const { recipe_id } = req.body;
      const token = req.headers.authorization!;

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
        result = await newRecipeData.delRecipe(recipe_id);
      } else {
        throw new PermissionDenied();
      }

      res.status(200).send({
        message: result,
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
