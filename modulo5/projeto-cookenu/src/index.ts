import { app } from "./controller/app";
import { UserController } from "./controller/UserController";
import { connectionTest } from "./endpoints/connectionTest";
import { recipeEndpoint } from "./endpoints/recipe";
import { userEndpoint } from "./endpoints/users";

const user = new userEndpoint();
const recipe = new recipeEndpoint();

const userController = new UserController()

app.get("/user/feed", user.getFeedByFollower);
app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login);
app.get("/user/profile", userController.getProfile);
// app.get("/user/feed", userController.getFeedByFollower)
app.get("/user/:user_id", userController.getById)
app.post("/user/follow", userController.postFollow);
app.delete("/user/unfollow", userController.deleteFollow);

// const RecipeController = new RecipeController()


//Test
app.get("/connectionTest", connectionTest);

//Users
// app.post("/user/login", user.login);
// app.get("/user/profile", user.getProfile);
// app.get("/user/:user_id", user.getById);
// app.post("/user/signup", user.signup);
// app.post("/user/follow", user.postFollow);
// app.delete("/user/unfollow", user.deleteFollow);
app.delete("/user/delete/:user_id", user.deleteById);

//Recipes
app.post("/recipe", recipe.createRecipe);
app.put("/recipe/edit", recipe.putEditRecipe);
app.get("/recipe/:recipe_id", recipe.getReciveById);
app.delete("/recipe/delete", recipe.deleteRecipe);
