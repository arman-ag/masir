import Image from 'next/image';
import Link from 'next/link';
import { cardProps } from './types';

const Card = ({
  country,
  population,
  region,
  capital,
  alt,
  flag,
}: cardProps) => {
  return (
    <Link href={`/${country}`}>
      <div className='flex justify-center flex-wrap '>
        <div className='rounded-lg h-85 shadow-lg bg-white w-full sm:w-72  dark:bg-darkBlue-100 dark:text-white'>
          <Image
            width={480}
            height={100}
            className='rounded-t-lg h-48'
            src={flag}
            alt={alt}
          />

          <div className='p-6'>
            <h5 className='text-gray-900 text-xl font-medium mb-2'>
              {country}
            </h5>
            <p>
              <span className='font-bold '>Population:</span>
              <span>{population}</span>
            </p>
            <p>
              <span className='font-bold '>Region:</span>
              <span>{region}</span>
            </p>{' '}
            <p>
              <span className='font-bold '>Capital:</span>
              <span>{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
