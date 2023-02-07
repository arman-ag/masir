import { AiOutlineSearch } from 'react-icons/ai';
import { searchBarPropsType } from './types';
export const SearchBar = ({ setSearchWord }: searchBarPropsType) => {
  const textEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };
  return (
    <form
      className='sm:w-2/6 '
      // onSubmit={send}
    >
      <label className='mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white'>
        Search
      </label>
      <div className='relative rounded-lg	 dark:text-white  shadow-md'>
        <button
          type='submit'
          className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'
        >
          <AiOutlineSearch size={18} className='text-gray-400' />
        </button>
        <input
          onChange={textEntry}
          type='search'
          id='default-search'
          className='block w-full p-4 pl-10 text-sm text-gray-900  rounded-lg bg-white dark:bg-darkBlue-100 dark:placeholder-white dark:text-white '
          placeholder='Search for a country...'
          required
        />
      </div>
    </form>
  );
};
