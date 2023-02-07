import Image from 'next/image';
import serverError from '../../public/images/serverError.png';

const ServerError = () => {
  return (
    <div className='flex justify-center items-center flex-col grow 	h-screen'>
      <Image alt='404 image' src={serverError} className='w-56 ' />
      <h2 className='text-5xl mt-16 '>Server error</h2>
    </div>
  );
};

export default ServerError;
