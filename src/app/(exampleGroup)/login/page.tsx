import type { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Login Page - My Static App',
    description: 'This is a statically generated page with SEO metadata.'
  };
};

export default async function Page() {
  const resp = await fetch('https://rickandmortyapi.com/api/character');
  const data = await resp.json();

  console.log('data', data);

  return (
    <section>
      <h1>This is the page in the LOGIN path</h1>
      <p>{JSON.stringify(data)}</p>
    </section>
  );
}
