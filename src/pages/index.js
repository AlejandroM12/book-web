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
      <main className='bg-white'>
        <div className='px-10'>
          <Navbar />
          <Popular />
          <Latest />
          <Suscribe />
          <Testimonials />
        </div>
        <Footer />
      </main>
    </div>
  );
}
