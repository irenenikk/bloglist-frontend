import { SET_ALL_EVENTS, CREATE_EVENT } from '../actions/eventActions'
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_ALL_EVENTS:
    return action.events
  case CREATE_EVENT:
    const events = [...state, action.event]
    return events
  default:
    return state
  }
}
