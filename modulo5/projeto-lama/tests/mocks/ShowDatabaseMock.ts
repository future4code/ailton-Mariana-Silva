import { DataBase } from "../../src/database/DataBase";

export class ShowDatabaseMock extends DataBase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";
}
