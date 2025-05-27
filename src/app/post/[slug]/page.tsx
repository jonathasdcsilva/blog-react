type PageSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PageSlugPost( {params} : PageSlugPageProps ) {
  const { slug } = await params;
  return (
    <h1 className='text-7xl font-extrabold py-16'>{slug}</h1>
  );
}