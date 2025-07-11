import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findAllPublished(): Promise<PostModel[]>;
  findBySlug(slug: string): Promise<PostModel>;
  deletePostById(id: string): Promise<boolean>;

  create(post: PostModel): Promise<PostModel>;
  delete(id: string): Promise<PostModel>;
  update(
    id: string,
    newPostData: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
  ): Promise<PostModel>;
}