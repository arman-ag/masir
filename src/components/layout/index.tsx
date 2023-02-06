import { Header } from './Header';
import { layoutProps } from './types';

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      <div className=' px-5 md:px-10  '>{children}</div>
    </>
  );
};

export default Layout;
