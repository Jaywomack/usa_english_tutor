import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({
  children,
  title = 'USA English Tutor',
  description = 'Welcome to USA English Tutor'
}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
