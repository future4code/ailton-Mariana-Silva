export class Recipe {
  constructor(
    private recipe_id: string,
    private recipe_title: string,
    private recipe_description: string,
    private author_id: string,
    private creation_date: string
  ) {}

  public getId() {
    return this.recipe_id;
  }

  public getTitle() {
    return this.recipe_title;
  }

  public getDescription() {
    return this.recipe_description;
  }

  public getAuthorId() {
    return this.author_id;
  }
  public getCreationDate() {
    return this.creation_date;
  }
}

export interface CreateRecipeDTO {
  recipe_title: string;
  recipe_description: string;
  token: string;
}

export interface RecipeDTO {
  token: string;
  recipe_id: string;
}

export interface EditRecipeDTO {
  recipe_title: string;
  recipe_description: string;
  token: string;
  recipe_id: string;
}

export interface EditRecipe {
  recipe_id: string;
  recipe_title: string;
  recipe_description: string;
}
