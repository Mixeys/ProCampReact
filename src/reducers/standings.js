import * as Type from '../actions/constants'

const initialState = {
  isFetching: false,
  standings: [],
  error: '',
}

export function standingsReducer(state = initialState, action) {
  switch (action.type) {
    case Type.GET_STANDINGS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case Type.GET_STANDINGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        standings: action.payload,
      }
    case Type.GET_STANDINGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}