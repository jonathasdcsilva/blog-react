import ErrorMessage from '@/components/ErrorMessage';

export default async function NotFoundPage() {
  return (
      <ErrorMessage pageTitle='Página não encontrada' contentTitle='404' content='A página que você procura não existe.' />
  );
}