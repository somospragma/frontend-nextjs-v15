// ! Its mandatory to type 'use client' on each page where its needed, it doesnt affect child pages/routes.
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Page - My Static App',
  description: 'This is a statically generated page with SEO metadata.'
};

export default function Home() {
  return (
    <section>
      <h1>Root content</h1>
    </section>
  );
}
