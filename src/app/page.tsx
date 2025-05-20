import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImge';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react'

export default async function HomePage() {

  return (
    <Container>
        <Header />

        <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
          <PostCoverImage linkProps={{href:'#'}} imageProps={{width:1200, height: 720, src:'/images/bryen_8.png', alt:'Image', priority: true }} />
        </section>

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
        <footer>
          <p className='text-6xl font-bold text-center py-8'>Aqui é a footer</p>
        </footer>
    </Container>
  );
}
