import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImge';
import { PostHeading } from '../PostHeading';

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div className='flex flex-col gap-8'>
      {posts.map(post => {
        return (
          <div className='flex flex-col gap-4' key={post.id}>
            <PostCoverImage
              linkProps={{
                href:`/post/${post.slug}`
              }}
              imageProps={{
                width:1200,
                height: 720,
                src:post.coverImageUrl,
                alt:post.title,
              }}
            />
            <div className='flex flex-col gap-4 sm:justify-center'>
              <time className='text-slate-600 block text-sm/tight' dateTime={post.createdAt}>{post.createdAt}</time>
              <PostHeading url='#'>
                {post.title}
              </PostHeading>
              <p>
                {post.excerpt}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}