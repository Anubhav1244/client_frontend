import React, { Suspense, lazy } from 'react';
import AboutSection from '../Components/AboutSection';

// Lazy loading components
const AboutUsBanner = lazy(() => import('../Components/AboutUsBanner'));
const FeedbackForm = lazy(() => import('../Components/Feedback'));
const Participants = lazy(() => import('../Components/Participants'));

const About = () => {
  return (
    <>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <AboutUsBanner />
      </Suspense>

      <AboutSection />

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <FeedbackForm />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Participants />
      </Suspense>
    </>
  );
};

export default About;
