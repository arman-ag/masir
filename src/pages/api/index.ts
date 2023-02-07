import axios from 'axios';
const baseUrl = 'https://restcountries.com/v3.1';
const getSingleDetail = (country: string | string[]) => {
  return axios.get(`${baseUrl}/name/${country}`);
};
// const getSearchResult=(searchWord)=>{
// return axios.get(`${baseUrl}`)
// }
export const api = {
  getSingleDetail,
};
