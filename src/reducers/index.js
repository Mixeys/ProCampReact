import { combineReducers } from 'redux'

import { teamsReducer } from './teams'
import { teamReducer } from './team'
import { fixturesReducer } from './fixtures'

export const rootReducer = combineReducers({
  teams: teamsReducer,
  team: teamReducer,
  fixtures: fixturesReducer,
})
