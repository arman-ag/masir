import { Button } from '@/components/common/Button';
import Layout from '@/components/layout';
import { countryDetailsType, countryQueryType } from '@/types/countryTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
const Card = ({ countryDetail }: countryDetailsType) => {
  // const [countryDetail, setCountryDetail] = useState<countryDetailsType>();
  // const [loading, setLoading] = useState(true);
  const [nativeLang, setNativeLang] = useState<string>();
  const [borderCountries, setBorderCountries] = useState();
  const router = useRouter();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       //get all countries
  //       const res = await api.getAllCountries();
  //       const result = res.data;

  //       const borderCountries = countryDetail?.borders.map(
  //         (countryShortName) => {
  //           return result?.filter((item) => {
  //             console.log(countryShortName.toLocaleLowerCase());
  //             return item.name.common
  //               .toLowerCase()
  //               .include(countryShortName.toLocaleLowerCase());
  //           });
  //         }
  //       );
  //       setBorderCountries('borderCountries', borderCountries);
  //     } catch (err) {
  //       // console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    if (countryDetail) {
      const countryName: any = countryDetail?.name?.nativeName;
      const native = countryName[Object?.keys(countryName)[0]]?.common;
      setNativeLang(native);
    }
  }, [countryDetail]);

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
          <div className='flex  flex-wrap md:px-0 '>
            <Image
              width={500}
              height={200}
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
    const queryItem = query.country;
    const res = await fetch(`${baseUrl}/name/${queryItem}`);
    const data = await res?.json();
    const countryDetail = data[0];
    return { props: { countryDetail } };
  }
}
