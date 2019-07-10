import * as Type from '../actions/constants'

const initialState = {
  isFetchingFixtures: false,
  fixtures: [],
  errorFixtures: '',
  isFetchingEvents: false,
  events: [],
  errorEvents: '',
}

export function fixturesReducer(state = initialState, action) {
  switch (action.type) {
    case Type.GET_FIXTURES_REQUEST:
      return {
        ...state,
        isFetchingFixtures: true,
      }
    case Type.GET_FIXTURES_SUCCESS:
      return {
        ...state,
        isFetchingFixtures: false,
        fixtures: action.payload,
      }
    case Type.GET_FIXTURES_FAILURE:
      return {
        ...state,
        isFetchingFixtures: false,
        errorFixtures: action.payload,
      }
      case Type.GET_EVENT_REQUEST:
        return {
          ...state,
          isFetchingEvents: true,
        }
      case Type.GET_EVENT_SUCCESS:
        return {
          ...state,
          isFetchingEvents: false,
          events: action.payload,
        }
      case Type.GET_EVENT_FAILURE:
        return {
          ...state,
          isFetchingEvents: false,
          errorEvents: action.payload,
        }
    default:
      return state
  }
}