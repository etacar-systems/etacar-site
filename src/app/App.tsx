import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import {Services} from '../pages/Services';
import {AboutUs} from '../pages/AboutUs';
import {ContactUs} from '../pages/ContactUs';
import {CaseStudy} from '../pages/CaseStudies';
import Layout from '../layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="case-studies" element={<CaseStudy/>}/>
          <Route path="about" element={<AboutUs/>}/>
          <Route path="contact" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
