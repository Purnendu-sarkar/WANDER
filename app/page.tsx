'use client';

import SmoothScroll from '../components/SmoothScroll';
import PageLoader from '../components/PageLoader';
import CustomCursor from '../components/ui/CustomCursor';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Philosophy from '../components/sections/Philosophy';
import DestinationJourney from '../components/destinations/DestinationJourney';
import DestinationList from '../components/destinations/DestinationList';
import WhenToWander from '../components/sections/WhenToWander';
import Experiences from '../components/sections/Experiences';
import ExpeditionLeaders from '../components/sections/ExpeditionLeaders';
import TravelJournal from '../components/sections/TravelJournal';
import TravelerVoices from '../components/sections/TravelerVoices';
import TheWanderersKit from '../components/sections/TheWanderersKit';
import BeforeYouWander from '../components/sections/BeforeYouWander';
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
        <Philosophy />
        <DestinationJourney />
        <DestinationList />
        <WhenToWander />
        <Experiences />
        <ExpeditionLeaders />
        <TravelJournal />
        <TravelerVoices />
        <TheWanderersKit />
        <BeforeYouWander />
        <Statistics />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
