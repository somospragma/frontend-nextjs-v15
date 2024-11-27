import type { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Login Page - My Static App',
    description: 'This is a statically generated page with SEO metadata.'
  };
};

export default function Page() {
  return (
    <section>
      <h1>This is the page in the LOGIN path</h1>
    </section>
  );
}
