import { buttonProps } from './types';

export const Button = ({ children, style, onClick = null }: buttonProps) => {
  return (
    <button
      onClick={onClick!}
      className={`${style} bg-white min-w-sm sm:min-w-l  hover:bg-gray-100 text-gray-800  py-2 px-4  border-gray-400 rounded shadow-lg  dark:bg-darkBlue-100 dark:text-white`}
    >
      <div className='flex justify-center items-center'>{children}</div>
    </button>
  );
};
