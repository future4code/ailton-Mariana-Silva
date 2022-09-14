import { app } from "./app";
import { connectionTest } from "./endpoints/connectionTest";
import { recipeEndpoint } from "./endpoints/recipe";
import { userEndpoint } from "./endpoints/users";

const user = new userEndpoint();
const recipe = new recipeEndpoint();

//Test
app.get("/connectionTest", connectionTest);

//Users
app.post("/user/signup", user.signup);
app.get("/user/login", user.login);
app.get("/user/profile", user.getProfile);
app.get("/user/:user_id", user.getById);

//Recipes
app.post("/recipe", recipe.createRecipe);
app.get("/recipe/:recipe_id", recipe.getReciveById);
