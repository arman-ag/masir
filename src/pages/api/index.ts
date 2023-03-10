import axios from 'axios';
const baseUrl = 'https://restcountries.com/v3.1';
const getSingleDetail = (country: string | string[]) => {
  return axios.get(`${baseUrl}/name/${country}`);
};
const getFilterResult = (filterItem: string | string[]) => {
  return axios.get(`${baseUrl}/region/${filterItem}`);
};
const getAllCountries = () => {
  return axios.get(`${baseUrl}/all`);
};
export const api = {
  getSingleDetail,
  getFilterResult,
  getAllCountries,
};
