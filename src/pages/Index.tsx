import React from 'react';
import BestPlace from '../components/IndexPage/BestPlace';

import Hero from '../components/IndexPage/Hero';
import LatestPropertiesGrid from '../components/IndexPage/LatestPropertiesGrid';
import OurAdvantages from '../components/IndexPage/OurAdvantages';
import PropertiesByArea from '../components/IndexPage/PropertiesByArea';

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      <PropertiesByArea />
      <OurAdvantages />
      <LatestPropertiesGrid />
      <BestPlace />
    </>
  );
};

export default Index;
