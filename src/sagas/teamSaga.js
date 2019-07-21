import { takeEvery, call, put } from 'redux-saga/effects'
import * as Type from '../actions/constants'
import axios from '../api/axios'

import { requestTeam, requestTeamSuccess, requestTeamError } from '../actions/TeamActions'

function* watchGetTeam() {
  yield takeEvery(Type.FETCHED_TEAM, getTeamWorker)
}

function* getTeamWorker(action) {
  try {
    yield put(requestTeam())
    const team = yield call(() => axios.get(`/teams/team/${action.payload}`))
    console.log('team: ', team)
    yield put(requestTeamSuccess(team))
  } catch (error) {
    yield put(requestTeamError(error))
  }
}

export { watchGetTeam }