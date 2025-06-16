'use server';

import { postRepository } from '@/repositories/post';
import { logColor } from '@/utils/log-color';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  logColor('' + id);

  if(!id || typeof(id) !== 'string') {
    return {
      error: 'Dados inválidos!',
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if(!post) {
    return {
      error: 'Post não encontrado!',
    };
  }

  await postRepository.deletePostById(id).catch(() => undefined);

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}