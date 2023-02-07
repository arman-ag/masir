import Image from 'next/image';
import notFoundImage from '../../public/images/notFoundImage.png';

const notFound = () => {
  return (
    <div className='flex justify-center items-center flex-col grow 	h-screen'>
      <Image alt='404 image' src={notFoundImage} className='w-56 ' />
      <h2 className='text-5xl mt-16 '>Page not found</h2>
    </div>
  );
};

export default notFound;
