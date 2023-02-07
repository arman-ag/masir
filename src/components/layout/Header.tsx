// @ts-nocheck
import useDarkMode from '@/hooks/darkMod';
import { BsMoon, BsMoonFill } from 'react-icons/bs';
export const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header>
      <div className='bg-white flex px-10 justify-between  shadow h-12 mb-2 items-center	dark:bg-darkBlue-100 dark:text-white'>
        <p className='font-bold'>Where in the world?</p>
        <button
          onClick={() => setTheme(colorTheme === 'dark' ? 'dark' : 'light')}
          className='flex items-center'
        >
          {colorTheme === 'light' ? <BsMoonFill /> : <BsMoon />}
          <span className='ml-2'> Dark Mode</span>
        </button>
      </div>
    </header>
  );
};
