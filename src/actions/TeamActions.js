import * as Type from '../actions/constants'

const requestTeam = () => {
  return {
    type: Type.GET_TEAM_REQUEST,
  }
}

const requestTeamSuccess = data => {
  return {
    type: Type.GET_TEAM_SUCCESS,
    payload: data.data.api.teams,
  }
}

const requestTeamError = error => {
  return {
    type: Type.GET_TEAM_FAILURE,
    payload: error,
  }
}

export { requestTeam, requestTeamSuccess, requestTeamError }