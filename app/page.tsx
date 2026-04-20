import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { FeaturedTours } from '@/components/featured-tours';
import { Testimonials } from '@/components/testimonials';
import { Merchandise } from '@/components/merchandise';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedTours />
      <Testimonials />
      <Merchandise />
      <Footer />
    </main>
  );
}
