import eventService from '../../services/events'
import { handleError, createNotification } from '../actions/notificationActions'

export const SET_ALL_EVENTS = 'SET_ALL_EVENTS'

export const setAllEvents = (events) => {
  return {
    type: SET_ALL_EVENTS,
    events,
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

export const createNewEvent = (event) => {
    return async (dispatch) => {
      try {
      await eventService.postNewEvent(event)
      dispatch(getAllEvents())
    } catch (e) {
      dispatch(handleError(e))
    }
  }
}