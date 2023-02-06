import { Header } from './Header';
import { layoutProps } from './types';

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      <div className='p-10'>{children}</div>
    </>
  );
};

export default Layout;
