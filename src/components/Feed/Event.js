import React from 'react'
import { Link } from 'react-router-dom'

export default ({ event }) => {
  return (
    <div>
      <Link key={event.user._id} to={`/users/${event.user._id}`}>
        {event.user.username}
      </Link>
      <span>
        {` ${event.description} at ${event.time}`}
      </span>
    </div>
  )
}