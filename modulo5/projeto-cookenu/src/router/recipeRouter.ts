import { Router } from 'express'
import { RecipeController } from '../controller/RecipeController'

export const recipeRouter = Router()

const recipeController = new RecipeController();

recipeRouter.post("/", recipeController.createRecipe);
recipeRouter.put("/edit", recipeController.putEditRecipe);
recipeRouter.get("/:recipe_id", recipeController.getRecipeById);
recipeRouter.delete("/delete", recipeController.deleteRecipe);