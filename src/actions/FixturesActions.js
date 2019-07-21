import * as Type from './constants'

const requestFixtures = () => {
  return {
    type: Type.GET_FIXTURES_REQUEST,
  }
}

const requestFixturesSuccess = data => {
  return {
    type: Type.GET_FIXTURES_SUCCESS,
    payload: data.data.api.fixtures,
  }
}

const requestFixturesError = error => {
  return {
    type: Type.GET_FIXTURES_FAILURE,
    payload: error,
  }
}

export { requestFixtures, requestFixturesSuccess, requestFixturesError }