import eventService from '../../services/events'
import { handleError } from '../actions/notificationActions'

export const SET_ALL_EVENTS = 'SET_ALL_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'

export const setAllEvents = (events) => {
  return {
    type: SET_ALL_EVENTS,
    events,
  }
}

export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    event: event,
  } 
}

export const getAllEvents = () => {
  return async (dispatch) => {
    try {
      const resp = await eventService.getAll()
      dispatch(setAllEvents(resp))
    } catch (e) {
      dispatch(handleError(e))
    }
  }
}
