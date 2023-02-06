import { Button } from '@/components/common/Button';
import Layout from '@/components/layout';
import { BiArrowBack } from 'react-icons/bi';
const Card = () => {
  return (
    <Layout>
      <section>
        <div className='mb-14'>
          <Button>
            <BiArrowBack /> <span className='ml-2'>Back</span>
          </Button>
        </div>
        <div className='flex flex-wrap '>
          <img
            className='  mr-16 mb-6 max-w-lsm sm:max-w-lg'
            src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
            alt='Belgium flag'
          />
          <div className=' flex flex-col '>
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
                  <Button key={key}>France</Button>
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
