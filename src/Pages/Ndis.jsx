import React, { Suspense, lazy } from 'react';
import NdisInfo from '../Components/Ndismain';
import FAQ from '../Components/FAQ';
import ChangeProvider from '../Components/ChangeNDIS';

// Lazy load NDISBanner
const NDISBanner = lazy(() => import('../Components/NDISBanner'));

const Ndis = () => {
  return (
    <div>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <NDISBanner />
      </Suspense>
      
      <NdisInfo />
      <FAQ />
      <ChangeProvider />
    </div>
  );
};

export default Ndis;
