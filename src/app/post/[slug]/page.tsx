import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/SpinLoader';
import { findPostBySlugCached } from '@/lib/post/queries/public';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-static';

type PageSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({params} : PageSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function PageSlugPost( {params} : PageSlugPageProps ) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}