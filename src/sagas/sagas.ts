import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import Axios from 'axios';

import { FETCH_DATA, responseData } from '../actions';

import { Action } from 'redux';

interface ActionWith<PayloadType> extends Action {
  payload: PayloadType;
}

function* fetchData(payload: ActionWith<string>): SagaIterator {
  try {
    const api = (url: string) => {
      return Axios.get(url)
        .then(data => data)
        .catch((err: any) => {
            // tslint:disable-next-line:no-console
            console.log(err)
        });
    };
    const result = yield call(api, payload.payload);
    yield put(responseData('loaded', result.data));
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
}

export function* saga(): SagaIterator {
  yield takeLatest(FETCH_DATA, fetchData);
}
