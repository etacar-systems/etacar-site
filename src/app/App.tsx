import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {NavHeader} from '../components/NavHeader';
import {routesConfig} from '../routes/routesConfig';
import {Footer} from '../components/Footer/Footer';

export const App = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer/>
    </>
  );
};
