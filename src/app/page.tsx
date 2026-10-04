import { Hero } from '@/components/home/hero';
import { OceanFeature } from '@/components/home/ocean-feature';
import { Discovery } from '@/components/home/discovery';
import { CentreTransition } from '@/components/motion/centre-transition';
import { Experience } from '@/components/home/experience';
import { BrandsSection } from '@/components/home/brands-section';
import { Business } from '@/components/home/business';
import { SelectedProducts } from '@/components/home/selected-products';
import { Contact } from '@/components/home/contact';
import { QuickSearch } from '@/components/home/quick-search';
export default function Home() {
  return (
    <>
      <Hero />
      <OceanFeature />
      <QuickSearch />
      <Discovery />
      <CentreTransition />
      <Experience />
      <BrandsSection />
      <Business />
      <SelectedProducts />
      <Contact />
    </>
  );
}
