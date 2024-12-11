import { Outlet } from 'react-router-dom';
import HeaderWithSearchBar from './Header';
import Footer from './Footer';
import ResponsiveAppBar from './Appbar';
import Discount from './Discount';
import Partners from './Partners';

export default function Layout() {
  return (
    <>
      <HeaderWithSearchBar />
      <ResponsiveAppBar />
      <Discount />
      <Outlet />
      <Partners />
      <Footer />
    </>
  );
}
