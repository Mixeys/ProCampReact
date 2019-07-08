import axios from '../api/axios'
import * as Type from './constants'

const getTeam = (id) => async (dispatch, getState) => {
    dispatch({
        type: Type.GET_TEAM_REQUEST,
    })
    try {
        const response = await axios.get(`/teams/team/${id}`)
        console.log('response: ', response)
        dispatch({
            type: Type.GET_TEAM_SUCCESS,
            payload: response.data.api.teams,
        })
    } catch (error) {
        dispatch({
            type: Type.GET_TEAM_FAILURE,
            payload: error,
        })
    }
}

export { getTeam }