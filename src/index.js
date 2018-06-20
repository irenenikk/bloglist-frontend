import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import openSocket from 'socket.io-client'
import { createEvent } from './state/actions/eventActions'

import notificationReducer from './state/reducers/notificationReducer'
import blogsReducer from './state/reducers/blogsReducer'
import sessionReducer from './state/reducers/sessionReducer'
import usersReducer from './state/reducers/usersReducer'
import eventReducer from './state/reducers/eventReducer'
import App from './components/App'
import { loadSession } from './state/actions/sessionActions'
import { getAllBlogs } from './state/actions/blogActions'
import { getAllUsers } from './state/actions/userActions'
import { getAllEvents } from './state/actions/eventActions'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  session: sessionReducer,
  users: usersReducer,
  events: eventReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

store.dispatch(loadSession())
store.dispatch(getAllBlogs())
store.dispatch(getAllUsers())
store.dispatch(getAllEvents())

const socket = openSocket(process.env.REACT_APP_SOCKETURL)

const subscribeToEvents = () => {
  console.log('Subscribing')
  socket.on('newEvent', (event) => {
    console.log('Creating new event ' + JSON.stringify(event))
    store.dispatch(createEvent(event))
  })
  socket.emit('subscribeToEvents')
}
subscribeToEvents()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
