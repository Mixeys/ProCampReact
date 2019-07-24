import { combineReducers } from 'redux'

import { teamsReducer } from './teams'
import { teamReducer } from './team'
import { fixturesReducer } from './fixtures'
import { standingsReducer } from './standings';

export const rootReducer = combineReducers({
  teams: teamsReducer,
  team: teamReducer,
  fixtures: fixturesReducer,
  standings: standingsReducer
})
