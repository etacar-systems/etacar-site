import React from 'react';
import { Introducion } from './components/Introducion';
import { Services } from './components/Services';
import { Footer } from '../../components/Footer/Footer';

export const ServicesPage = () => {
  return (
    <div>
      <Introducion />
      <Services />
      <Footer/>
    </div>
  );
};
