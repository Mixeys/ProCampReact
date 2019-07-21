import { takeEvery, call, put } from 'redux-saga/effects'
import * as Type from '../actions/constants'
import axios from '../api/axios'

import { requestTeams, requestTeamsSuccess, requestTeamsError } from '../actions/TeamsActions'

function* watchGetTeams() {
  yield takeEvery(Type.FETCHED_TEAMS, getTeamsWorker)
}

function* getTeamsWorker() {
  try {
    yield put(requestTeams())
    const teams = yield call(() => axios.get(`/teams/league/2`))
    yield put(requestTeamsSuccess(teams))
  } catch (error) {
    yield put(requestTeamsError(error))
  }
}

export { watchGetTeams }
