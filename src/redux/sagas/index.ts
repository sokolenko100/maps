import {all} from 'redux-saga/effects';
import CountriesDataSaga from '@screens/MapScreen/redux/sagas';

export default function* saga() {
  yield all([...CountriesDataSaga]);
}
