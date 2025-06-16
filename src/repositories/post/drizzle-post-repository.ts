import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { logColor } from '@/utils/log-color';
import { asyncDelay } from '@/utils/async-delay';
import { SIMULATE_WAIT_IN_MS } from '@/lib/constants';
import { postsTable } from '@/db/drizzle/schemas';
import { eq } from 'drizzle-orm';

export class DrizzlePostRepository implements PostRepository {

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findAll', Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findById', Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if(!post) {
      throw new Error("Post não encontrado.");
    }

    return post;
  }

  async findAllPublished(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findAllPublished', Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findBySlug', Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (post, { eq, and }) => and(eq(post.published, true), eq(post.slug, slug)),
    });

    if(!post) {
      throw new Error("Post não encontrado.");
    }

    return post;
  }

  async deletePostById(id: string): Promise<boolean> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('deletePostById', Date.now());

    const post = await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

    if(!post) {
      throw new Error("Post não excluído.");
    }

    return true;
  }
}