import { Button } from '@/components/common/Button';
import Layout from '@/components/layout';
import { countryDetailsType, countryQueryType } from '@/types/countryTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
const Card = ({ countryDetail }: countryDetailsType) => {
  const [nativeLang, setNativeLang] = useState<string>();

  console.log(countryDetail);

  useEffect(() => {
    if (countryDetail) {
      const countryName: any = countryDetail?.name?.nativeName;
      const native = countryName[Object?.keys(countryName)[0]]?.common;
      setNativeLang(native);
    }
  }, [countryDetail]);
  const addComma = () => {
    const arrayLang = Object.values(countryDetail?.languages);
    return arrayLang.map((item, index) => {
      if (index + 1 !== arrayLang.length) {
        return item + ', ';
      }
      return item;
    });
  };
  console.log(Object.values(countryDetail.currencies)[0].name);

  return (
    <>
      <Layout>
        <section>
          <div className='mb-14  sm:ml-0 '>
            <Link href='/'>
              <Button>
                <BiArrowBack /> <span className='ml-2'>Back</span>
              </Button>
            </Link>
          </div>
          <div className='flex items-center flex-wrap md:justify-start sm:px-0 sm:justify-center '>
            <Image
              width={500}
              height={200}
              className='sm:mr-16 mb-6 max-w-full	 sm:max-w-lg'
              src={countryDetail?.flags?.svg}
              alt={countryDetail?.flags?.alt}
            />
            <div className=' flex flex-col dark:text-white sm:mt-3'>
              <header>
                <h5 className=' font-bold text-2xl   '>
                  {countryDetail?.name?.common}
                </h5>
              </header>
              <div className=' flex justify-between mt-4 gap-x-40 flex-wrap'>
                <div className='leading-9	mb-8	'>
                  <p>
                    <span className='font-bold mr-1 '>Native Name:</span>
                    <span>{nativeLang}</span>
                  </p>
                  <p>
                    <span className='font-bold mr-1 '>Population:</span>
                    <span>{countryDetail?.population}</span>
                  </p>{' '}
                  <p>
                    <span className='font-bold mr-1 '>Region:</span>
                    <span>{countryDetail?.region}</span>
                  </p>{' '}
                  <p>
                    <span className='font-bold mr-1 '>Sub Region:</span>
                    <span>{countryDetail?.subregion}</span>
                  </p>{' '}
                  <p>
                    <span className='font-bold mr-1 '>Capital:</span>
                    <span>{countryDetail?.capital}</span>
                  </p>
                </div>
                <div className='leading-9	mb-8	'>
                  <p>
                    <span className='font-bold mr-1 '>Top Level Domain:</span>
                    <span>{countryDetail.cca2}</span>
                  </p>
                  <p>
                    <span className='font-bold mr-1 '>Currencies:</span>
                    <span>
                      {Object.values(countryDetail.currencies)[0].name}
                    </span>
                  </p>{' '}
                  <p>
                    <span className='font-bold mr-1 '>Language:</span>
                    <span>{addComma()}</span>
                  </p>{' '}
                </div>
              </div>

              <div className='flex flex-wrap items-center  sm:flex'>
                <span className='font-bold mb-2 mr-2 self-center'>
                  Border Countries:
                </span>
                <div className='flex justify-start gap-3 max-w-xl flex-wrap'>
                  {countryDetail?.borders?.slice(0, 3).map((item, key) => (
                    <Link href={`/${item}`} key={key}>
                      <Button style='min-w-sm'>{item}</Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Card;

export async function getServerSideProps({ query }: countryQueryType) {
  const baseUrl = 'https://restcountries.com/v3.1';
  if (query.country) {
    try {
      const queryItem = query.country;
      const res = await fetch(`${baseUrl}/name/${queryItem}`);
      const data = await res?.json();
      const countryDetail = data[0];
      if (res.status === 404) {
        return {
          redirect: {
            destination: '/404',
          },
        };
      } else {
        return { props: { countryDetail } };
      }
    } catch (error) {
      console.log('error');
      return {
        redirect: {
          destination: '/500',
        },
      };
    }
  }
}
