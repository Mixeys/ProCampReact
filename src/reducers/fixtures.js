import * as Type from '../actions/constants'

const initialState = {
  isFetching: false,
  fixtures: [],
  error: '',
}

export function fixturesReducer(state = initialState, action) {
  switch (action.type) {
    case Type.GET_FIXTURES_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case Type.GET_FIXTURES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fixtures: action.payload,
      }
    case Type.GET_FIXTURES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}