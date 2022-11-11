import React from 'react';

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
    </>
  );
};

export default Index;
