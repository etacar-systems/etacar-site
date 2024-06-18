import {Outlet} from 'react-router-dom';
import {Footer} from '../components/Footer/Footer';
import {NavHeader} from '../components/NavHeader';

export const Layout = () => {
  return (
    <>
      <NavHeader/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

