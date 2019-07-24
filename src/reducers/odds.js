import * as Type from '../actions/constants'

const initialState = {
  isFetching: false,
  odds: [],
  error: '',
}

export function oddsReducer(state = initialState, action) {
  switch (action.type) {
    case Type.GET_ODDS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case Type.GET_ODDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        odds: action.payload,
      }
    case Type.GET_ODDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}