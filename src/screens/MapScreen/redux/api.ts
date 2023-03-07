import axios, {AxiosPromise} from 'axios';

/**
 *  Get countries data api
 */
const getCountriesDataApi = (): AxiosPromise =>
  axios({
    method: 'GET',
    url: 'http://techslides.com/demos/country-capitals.json',
  });

export {getCountriesDataApi};
