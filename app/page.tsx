import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { TechSpecs } from '@/components/TechSpecs';
import { BuySection } from '@/components/BuySection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <TechSpecs />
        <BuySection />
      </main>
    </>
  );
}
