import { BsMoon } from 'react-icons/bs';
export const Header = () => {
  return (
    <header>
      <div className='bg-white flex px-10 justify-between shadow h-12 mb-2 items-center	'>
        <p className='font-bold'>Where in the world?</p>
        <button className='flex items-center'>
          <BsMoon />
          <span className='ml-2'> Dark Mode</span>
        </button>
      </div>
    </header>
  );
};
