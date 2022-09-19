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
