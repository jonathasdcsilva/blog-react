import { postRepository } from '@/repositories/post'
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublishedPostsCached = cache(
  async () => await postRepository.findAllPublished(),
);

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);

export const findPostBySlugCached = cache(
  async (slug: string) => {
    const post = await postRepository.findBySlug(slug).catch(() => undefined);

    if(!post) {
      return notFound();
    }

    return post;
  }
);