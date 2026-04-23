import React, { useState } from 'react';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Security } from './components/Security';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="min-h-screen font-sans selection:bg-teal-200 selection:text-teal-900 bg-slate-50 text-slate-900">
      {bannerVisible && <AnnouncementBanner onClose={() => setBannerVisible(false)} />}
      <Navbar bannerVisible={bannerVisible} />
      <Hero />
      <Features />
      <Security />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
