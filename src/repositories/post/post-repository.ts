import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findAllPublished(): Promise<PostModel[]>;
  findBySlug(slug: string): Promise<PostModel>;
  deletePostById(id: string): Promise<boolean>;
}