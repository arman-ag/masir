import { buttonProps } from './types';

export const Button = ({ children, style }: buttonProps) => {
  return (
    <button
      className={`${style} bg-white min-w-l  hover:bg-gray-100 text-gray-800  py-2 px-4  border-gray-400 rounded shadow-lg`}
    >
      <div className='flex justify-center items-center'>{children}</div>
    </button>
  );
};
