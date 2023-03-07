import {createSlice} from '@reduxjs/toolkit';
import {ICountrie} from './interfaces/ICountrie';

const initialState: {countries: ICountrie[]} = {
  countries: [
    {
      CountryName: 'Ukraine',
      CapitalName: 'Kyiv',
      CapitalLatitude: '50.43333333333333',
      CapitalLongitude: '30.516667',
      CountryCode: 'UA',
      ContinentName: 'Europe',
    },
  ],
};

export const newCountriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setNewCountries(state, action) {
      state.countries = action.payload;
    },
  },
});

const {actions} = newCountriesSlice;
export const {setNewCountries} = actions;
