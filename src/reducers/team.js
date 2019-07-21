import * as Type from '../actions/constants'

const initialState = {
  isFetching: false,
  team: [],
  error: '',
}

export function teamReducer(state = initialState, action) {
  console.log('reducerAction: ', action)
  switch (action.type) {
    case Type.GET_TEAM_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case Type.GET_TEAM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        team: action.payload,
      }
    case Type.GET_TEAM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}
