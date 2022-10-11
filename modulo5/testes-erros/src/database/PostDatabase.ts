import { ILikeDB, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post): Promise<void> => {
        const postDB = this.toPostDBModel(post)

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDB)
    }

    public getPosts = async (): Promise<IPostDB[]> => {
        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()

        return postsDB
    }

    public getLikes = async (postId: string): Promise<number> => {
        const result: any = await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .select()
            .count("id AS likes")
            .where({ post_id: postId })

        return result[0].likes as number
    }

    public findPostById = async (postId: string): Promise<IPostDB | undefined> => {
        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where({ id: postId })

        return postsDB[0]
    }

    public deletePost = async (postId: string): Promise<void> => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .delete()
            .where({ id: postId })
    }

    public findLike = async (postId: string, userId: string): Promise<ILikeDB | undefined> => {
        const likesDB: ILikeDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .select()
            .where({ post_id: postId })
            .andWhere({ user_id: userId })

        return likesDB[0]
    }

    public addLike = async (likeDB: ILikeDB): Promise<void> => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .insert(likeDB)
    }

    public removeLike = async (postId: string, userId: string): Promise<void> => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .delete()
            .where({ post_id: postId })
            .andWhere({ user_id: userId })
    }
}