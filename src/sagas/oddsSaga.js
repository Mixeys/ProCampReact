import { takeEvery, put } from 'redux-saga/effects'
import * as Type from '../actions/constants'
// import axios from '../api/axios'

import { API_ODDS } from '../api/mock'

import { requestOdds, requestOddsSuccess, requestOddsError } from '../actions/OddsActions'

function* watchGetOdds() {
  yield takeEvery(Type.FETCHED_ODDS, getOddsWorker)
}

function* getOddsWorker(action) {
  try {
    yield put(requestOdds())
    // const odds = yield call(() => axios.get(`/odds/league/2`))
    const odds = API_ODDS
    console.log('odds: ', odds)
    yield put(requestOddsSuccess(odds))
  } catch (error) {
    yield put(requestOddsError(error))
  }
}

export { watchGetOdds }