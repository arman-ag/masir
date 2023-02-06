import Layout from '@/components/layout';

const Card = () => {
  return (
    <Layout>
      <div></div>
      <div className='flex  '>
        <img
          className='rounded-t-lg'
          src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
          alt=''
        />
        <div className='p-6'>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>Card title</h5>
          <p className='text-gray-700 text-base mb-4'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Card;
