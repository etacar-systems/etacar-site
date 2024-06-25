import { Routes, Route } from 'react-router-dom';

import { NavHeader } from '../../components/NavHeader';
import { routesConfig } from '../../routes/routesConfig';

export const App = () => {
  return (
    <>
      <NavHeader />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};
