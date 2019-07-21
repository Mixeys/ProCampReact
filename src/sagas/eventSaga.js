import { takeEvery, call, put } from 'redux-saga/effects'
import * as Type from '../actions/constants'
import axios from '../api/axios'

import { requestEvent, requestEventSuccess, requestEventError } from '../actions/EventActions'

function* watchGetEvent() {
  yield takeEvery(Type.FETCHED_EVENT, getEventWorker)
}

function* getEventWorker(action) {
  try {
    yield put(requestEvent())
    const team = yield call(() => axios.get(`events/${action.payload}`))
    yield put(requestEventSuccess(team))
  } catch (error) {
    yield put(requestEventError(error))
  }
}

export { watchGetEvent }