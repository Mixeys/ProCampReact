import { takeEvery, call, put } from 'redux-saga/effects'
import * as Type from '../actions/constants'
import axios from '../api/axios'

import { requestStandings, requestStandingsSuccess, requestStandingsError } from '../actions/StandingsActions'

function* watchGetStandings() {
  yield takeEvery(Type.FETCHED_STANDINGS, getStandingsWorker)
}

function* getStandingsWorker(action) {
  try {
    yield put(requestStandings())
    const standings = yield call(() => axios.get(`/leagueTable/${action.payload}`))
    yield put(requestStandingsSuccess(standings))
  } catch (error) {
    yield put(requestStandingsError(error))
  }
}

export { watchGetStandings }