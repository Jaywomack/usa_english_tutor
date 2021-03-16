import Footer from './Footer';
import Header from './Header';

const Layout = ({
  children,
  title = 'USA English Tutor',
  description = 'Welcome to USA English Tutor'
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
