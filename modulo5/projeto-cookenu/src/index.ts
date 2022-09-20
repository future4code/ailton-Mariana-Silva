import { app } from "./controller/app";
import { UserController } from "./controller/UserController";
import { recipeEndpoint } from "./endpoints/recipe";

const recipe = new recipeEndpoint();

const userController = new UserController();

app.get("/user/feed", userController.getFeedByFollower);
app.post("/user/signup", userController.signup);
app.post("/user/login", userController.login);
app.get("/user/profile", userController.getProfile);
app.get("/user/:user_id", userController.getById);
app.post("/user/follow", userController.postFollow);
app.delete("/user/unfollow", userController.deleteFollow);
// app.delete("/user/delete/:user_id", userController.deleteAccount);

// const RecipeController = new RecipeController()

//Recipes
app.post("/recipe", recipe.createRecipe);
app.put("/recipe/edit", recipe.putEditRecipe);
app.get("/recipe/:recipe_id", recipe.getReciveById);
app.delete("/recipe/delete", recipe.deleteRecipe);
