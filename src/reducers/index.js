import { combineReducers } from 'redux'

import { teamsReducer } from './teams'
import { teamReducer } from './team'

export const rootReducer = combineReducers({
  teams: teamsReducer,
  team: teamReducer,
})
