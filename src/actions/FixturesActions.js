import axios from '../api/axios'
import * as Type from './constants'

const getFixtures = () => async (dispatch, getState) => {
    dispatch({
        type: Type.GET_FIXTURES_REQUEST,
    })
    try {
        const response = await axios.get(`fixtures/league/2`)
        dispatch({
            type: Type.GET_FIXTURES_SUCCESS,
            payload: response.data.api.fixtures,
        })
    } catch (error) {
        dispatch({
            type: Type.GET_FIXTURES_FAILURE,
            payload: error,
        })
    }
}

const getEvent = (id) => async (dispatch, getState) => {
    dispatch({
        type: Type.GET_EVENT_REQUEST,
    })
    try {
        const response = await axios.get(`events/${id}`)
        console.log('response.event: ', response)
        dispatch({
            type: Type.GET_EVENT_SUCCESS,
            payload: response.data.api.events,
        })
    } catch (error) {
        dispatch({
            type: Type.GET_EVENT_FAILURE,
            payload: error,
        })
    }
}

export { getFixtures, getEvent }