import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';

import type { Theme } from '../App';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

interface HomePageProps {
  theme: Theme;
  onToggleTheme: () => void;
}

function HomePage({ theme, onToggleTheme }: HomePageProps) {
  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
