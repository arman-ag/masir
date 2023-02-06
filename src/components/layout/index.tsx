import { Header } from './Header';
import { layoutProps } from './types';

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      <div className=' py-5 px-10  '>{children}</div>
    </>
  );
};

export default Layout;
