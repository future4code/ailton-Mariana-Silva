import { Router } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeController } from "../controller/RecipeController";
import { RecipeDataBase } from "../data/recipeDataBase";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/IdGenarator";

export const recipeRouter = Router();

const recipeController = new RecipeController(
  new RecipeBusiness(
    new RecipeDataBase(),
    new GenerateId(),
    new Authenticator()
  )
);

recipeRouter.post("/", recipeController.createRecipe);
recipeRouter.put("/edit", recipeController.putEditRecipe);
recipeRouter.get("/:recipe_id", recipeController.getRecipeById);
recipeRouter.delete("/delete", recipeController.deleteRecipe);
