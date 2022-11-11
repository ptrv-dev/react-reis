import React from 'react';

import Hero from '../components/IndexPage/Hero';
import PropertiesByArea from '../components/IndexPage/PropertiesByArea';

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      <PropertiesByArea />
    </>
  );
};

export default Index;
