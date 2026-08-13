'use client';

import SmoothScroll from '../components/SmoothScroll';
import PageLoader from '../components/PageLoader';
import CustomCursor from '../components/ui/CustomCursor';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import DestinationJourney from '../components/destinations/DestinationJourney';
import DestinationList from '../components/destinations/DestinationList';
import Experiences from '../components/sections/Experiences';
import TravelJournal from '../components/sections/TravelJournal';
import Statistics from '../components/sections/Statistics';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <PageLoader />
      <CustomCursor />
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <DestinationJourney />
        <DestinationList />
        <Experiences />
        <TravelJournal />
        <Statistics />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
