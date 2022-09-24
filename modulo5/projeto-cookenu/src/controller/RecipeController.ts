import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import {
  CreateRecipeDTO,
  EditRecipeDTO,
  Recipe,
  RecipeDTO,
} from "../model/Recipe";

export class RecipeController {
  constructor(private recipeBusiness: RecipeBusiness) {}

  createRecipe = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;
      const { recipe_title, recipe_description } = req.body;

      const recipe: CreateRecipeDTO = {
        recipe_title,
        recipe_description,
        token,
      };
      const result = await this.recipeBusiness.createRecipe(recipe);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  getRecipeById = async (req: Request, res: Response): Promise<any> => {
    try {
      const token = req.headers.authorization!;
      const { recipe_id } = req.params;

      const recipe: RecipeDTO = {
        recipe_id,
        token,
      };

      const result = await this.recipeBusiness.getRecipeById(recipe);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  putEditRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization!;
      const { recipe_id, recipe_title, recipe_description } = req.body;

      const recipe: EditRecipeDTO = {
        recipe_title,
        recipe_description,
        recipe_id,
        token,
      };

      const result = await this.recipeBusiness.putEditRecipe(recipe);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  deleteRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization!;
      const { recipe_id } = req.body;

      const recipe: RecipeDTO = {
        recipe_id,
        token,
      };
      const result = await this.recipeBusiness.deleteRecipe(recipe);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
