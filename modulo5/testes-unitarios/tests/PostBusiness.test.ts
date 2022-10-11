import { PostBusiness } from "../src/business/PostBusiness";
import {
    IAddLikeInputDTO,
  ICreatePostInputDTO,
  IDeletePostInputDTO,
  IGetPostsInputDTO,
  IRemoveLikeInputDTO,
  Post,
} from "../src/models/Post";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { PostDatabaseMock } from "./mocks/PostDatabaseMock";

describe("Testando a PostBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Deve retornar uma lista de posts", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal",
    };

    const response = await postBusiness.getPosts(input);
    expect(response.posts.length).toBe(3);
    expect(response.posts[0]).toBeInstanceOf(Post);
  });

  test("Deve ser possível criar um novo post", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Teste do mock",
    };

    const response = await postBusiness.createPost(input);

    expect(response.message).toBe("Post criado com sucesso");
    expect(response.post).toBeInstanceOf(Post);
    expect(response.post.getId()).toBe("id-mock");
    expect(response.post.getContent()).toBe("Teste do mock");
    expect(response.post.getLikes()).toBe(0);
    expect(response.post.getUserId()).toBe("id-mock");
  });

  test("Delete post", async () => {
    const input: IDeletePostInputDTO = {
      token: "token-mock-normal",
      postId: "204",
    };

    const response = await postBusiness.deletePost(input);

    expect(response.message).toBe("Post deletado com sucesso");
  });

  test("Like post", async () => {
    const input: IAddLikeInputDTO = {
      token: "token-mock-normal",
      postId: "204",
    };

    const response = await postBusiness.addLike(input);

    expect(response.message).toBe("Like realizado com sucesso");
  });

  test("Remove Like post", async () => {
    const input: IRemoveLikeInputDTO = {
      token: "token-mock-normal",
      postId: "201",
    };

    const response = await postBusiness.removeLike(input);

    expect(response.message).toBe("Like removido com sucesso");
  });
});
