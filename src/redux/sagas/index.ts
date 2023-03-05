import {all, call} from 'redux-saga/effects';

export default function* saga() {
  yield all([call([])]);
}
