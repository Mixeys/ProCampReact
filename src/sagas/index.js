import { all } from 'redux-saga/effects'
import { watchGetTeams } from './teamsSaga'
import { watchGetFixtures } from './fixturesSaga';
import { watchGetTeam } from './teamSaga';
import { watchGetEvent } from './eventSaga';

export default function* rootSaga() {
  yield all([watchGetTeams(), watchGetFixtures(), watchGetTeam(), watchGetEvent()])
}
