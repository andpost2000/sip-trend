import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import Axios from 'axios';

import { FETCH_DATA, responseData, responseForm, SEND_FORM } from '../actions';

import { Action } from 'redux';
import { LoadStatus } from 'src/enums/enums';

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
    yield put(responseData(LoadStatus.Loaded, result.data));
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
}

const apiSendForm = (url: string, data: any, method: string) => {
  return Axios.request({ url, data, method })
    .then(response => response)
    .catch((err: any) => {
      // tslint:disable-next-line:no-console
      console.log(err);
    });
}

function* sendForm({ payload: { url, data, method } }: ActionWith<any>): SagaIterator {
  try {
    const result = yield call(apiSendForm, url, data, method);
    yield put(responseForm(result));
  } catch(e) {
    // tslint:disable-next-line:no-console
    console.log(e);
  }
}

export function* saga(): SagaIterator {
  yield takeLatest(FETCH_DATA, fetchData);
  yield takeLatest(SEND_FORM, sendForm);
}
