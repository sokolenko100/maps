import {SagaIterator} from '@redux-saga/core';
import {takeLatest, call, put} from 'redux-saga/effects';
import {filterCountriesData} from '../helpers';
import TYPES from './actionTypes';
import {getCountriesDataApi} from './api';
import {setNewCountries} from './reducer';

/**
 * Get countries data
 */
export function* getCountriesDataSaga(): SagaIterator {
  try {
    const {data} = yield call(getCountriesDataApi);
    const filterCountries = filterCountriesData(data);

    yield put(setNewCountries(filterCountries));
  } catch (e) {
    console.error(`getCountriesDataSaga error: ${e.message as string}`, e);
  }
}

export default [takeLatest(TYPES.GET_COUNTRIES_DATA, getCountriesDataSaga)];
