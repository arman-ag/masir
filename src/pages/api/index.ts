import axios from 'axios';
const baseUrl = 'https://restcountries.com/v3.1';
const getSingleDetail = (country: string | string[]) => {
  return axios.get(`${baseUrl}/name/${country}`);
};
export const api = {
  getSingleDetail,
};
