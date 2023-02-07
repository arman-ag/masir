import { Button } from '@/components/common/Button';
import { Loading } from '@/components/common/Loading';
import Layout from '@/components/layout';
import { countryDetailsType } from '@/types/countryTypes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { api } from '../api';
const Card = () => {
  const [countryDetail, setCountryDetail] = useState<countryDetailsType>();
  const [loading, setLoading] = useState(true);
  const [nativeLang, setNativeLang] = useState<string>();
  const router = useRouter();
  const { country } = router.query;
  console.log(countryDetail);
  useEffect(() => {
    setLoading(true);
    if (country) {
      const fetchData = async () => {
        try {
          const res = await api.getSingleDetail(country);
          const result: countryDetailsType = res?.data[0];
          setCountryDetail(result);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  }, [country]);
  console.log(countryDetail);
  useEffect(() => {
    if (countryDetail) {
      const countryName: any = countryDetail?.name?.nativeName;
      const native = countryName[Object?.keys(countryName)[0]]?.common;
      setNativeLang(native);
    }
  }, [countryDetail]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                src={countryDetail?.flags?.svg}
                alt={countryDetail?.flags?.alt}
              />
              <div className=' flex flex-col dark:text-white'>
                <header>
                  <h5 className=' font-bold text-2xl font- mb-2'>
                    {countryDetail?.name?.common}
                  </h5>
                </header>
                <div className='leading-10	mb-10	'>
                  <p>
                    <span className='font-bold '>Native Name:</span>
                    <span>{nativeLang}</span>
                  </p>
                  <p>
                    <span className='font-bold '>Population:</span>
                    <span>{countryDetail?.population}</span>
                  </p>{' '}
                  <p>
                    <span className='font-bold '>Region:</span>
                    <span>{countryDetail?.region}</span>
                  </p>{' '}
                  <p>
                    <span className='font-bold '>Sub Region:</span>
                    <span>{countryDetail?.subregion}</span>
                  </p>{' '}
                  <p>
                    <span className='font-bold '>Capital:</span>
                    <span>{countryDetail?.capital}</span>
                  </p>
                </div>
                <div className='flex flex-wrap items-center  sm:flex'>
                  <span className='font-bold mb-2 mr-2 self-center'>
                    Border Countries:
                  </span>
                  <div className='flex justify-start gap-3 max-w-xl flex-wrap'>
                    {countryDetail?.borders?.slice(0, 3).map((item, key) => (
                      <Button style='min-w-sm' key={key}>
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

export default Card;
