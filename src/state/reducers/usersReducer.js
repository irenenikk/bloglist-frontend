import { SET_ALL_USERS  } from '../actions/userActions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_ALL_USERS:
    return action.users
  default:
    return state
  }
}
