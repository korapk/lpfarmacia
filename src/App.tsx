import React from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import CourseStory from './components/CourseStory';
import WhatYouLearn from './components/WhatYouLearn';
import ExpectedResults from './components/ExpectedResults';
import BonusSection from './components/BonusSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import OtherCourses from "./components/OtherCourses";
import Opportunity from "./components/Opportunity";


function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <CourseStory />
      <WhatYouLearn />
      <Opportunity />
      <ExpectedResults />
      <BonusSection />
      <HowItWorks />
      <Testimonials />
      <Schedule />
      <FinalCTA />
      <OtherCourses />
      <FAQ />
      
    </div>
  );
}

export default App;