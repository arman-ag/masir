import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BsCheck } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { selectPropsType } from './types';

const region = [
  { name: 'Africa' },
  { name: 'Americas' },
  { name: 'Asia' },
  { name: 'Europe' },
  { name: 'Oceania' },
];

export const Select = ({ selected, setSelected }: selectPropsType) => {
  return (
    <div className='w-2/4 mt-4 sm:w-1/6 relative  sm:mt-0 '>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Button className='  dark:bg-darkBlue-100 dark:text-white relative h-12 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{selected.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <IoIosArrowDown className='h-5 w-5 text-gray-400' />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className=' dark:bg-darkBlue-100 dark:text-white absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {region.map((item, key) => (
                <Listbox.Option
                  key={key}
                  className={({ active }) =>
                    `relative  cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <BsCheck className='h-5 w-5' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
