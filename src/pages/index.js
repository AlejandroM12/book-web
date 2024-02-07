import {
  Footer,
  Hero,
  Latest,
  Navbar,
  Popular,
  Suscribe,
  Testimonials,
} from '@/components';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <Popular />
        <Latest />
        <Suscribe />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
