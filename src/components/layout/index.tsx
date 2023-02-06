import { Header } from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='p-10'>{children}</div>
    </>
  );
};

export default Layout;
