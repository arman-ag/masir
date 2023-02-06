import { Button } from '@/components/common/Button';
import Layout from '@/components/layout';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
const Card = () => {
  return (
    <Layout>
      <section>
        <div className='mb-14  sm:ml-0 '>
          <Link href='/'>
            <Button>
              <BiArrowBack /> <span className='ml-2'>Back</span>
            </Button>
          </Link>
        </div>
        <div className='flex  flex-wrap md:px-0 '>
          <img
            className='sm:mr-16 mb-6 max-w-full	 sm:max-w-lg'
            src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
            alt='Belgium flag'
          />
          <div className=' flex flex-col dark:text-white'>
            <header>
              <h5 className=' font-bold text-2xl font- mb-2'>Belgium</h5>
            </header>
            <div className='leading-10	mb-10	'>
              <p>
                <span className='font-bold '>Native Name:</span>
                <span>Belgie</span>
              </p>
              <p>
                <span className='font-bold '>Native Name:</span>
                <span>Belgie</span>
              </p>{' '}
              <p>
                <span className='font-bold '>Native Name:</span>
                <span>Belgie</span>
              </p>{' '}
              <p>
                <span className='font-bold '>Native Name:</span>
                <span>Belgie</span>
              </p>{' '}
              <p>
                <span className='font-bold '>Native Name:</span>
                <span>Belgie</span>
              </p>
            </div>
            <div className='flex flex-wrap items-center sm:flex'>
              <span className='font-bold mb-2 mr-2'>Boeder Countries:</span>
              <div className='flex justify-center gap-3'>
                {[...Array(3)].map((item, key) => (
                  <Button style='min-w-sm' key={key}>
                    France
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Card;
