import * as Type from '../actions/constants'

const initialState = {
  isFetching: false,
  teams: [],
  error: '',
}

export function teamsReducer(state = initialState, action) {
  switch (action.type) {
    case Type.GET_TEAMS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case Type.GET_TEAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        teams: action.payload,
      }
    case Type.GET_TEAMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}
