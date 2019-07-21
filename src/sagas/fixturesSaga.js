import { takeEvery, call, put } from 'redux-saga/effects'
import * as Type from '../actions/constants'
import axios from '../api/axios'

import { requestFixtures, requestFixturesSuccess, requestFixturesError } from '../actions/FixturesActions'

function* watchGetFixtures() {
  yield takeEvery(Type.FETCHED_FIXTURES, getFixturesWorker)
}

function* getFixturesWorker() {
  try {
    yield put(requestFixtures())
    const fixtures = yield call(() => axios.get(`/fixtures/league/2`))
    yield put(requestFixturesSuccess(fixtures))
  } catch (error) {
    yield put(requestFixturesError(error))
  }
}

export { watchGetFixtures }