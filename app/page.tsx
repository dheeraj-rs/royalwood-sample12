import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductCatalog from '@/components/ProductCatalog';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <ProductCatalog />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}