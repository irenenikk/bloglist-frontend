import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default ({ event }) => {
  const blog = event.blog ? event.blog : ''
  return (
    <div>
      <Link key={`${event.user._id}-${event._id}`} to={`/users/${event.user._id}`}>
        {event.user.username}
      </Link>
      <span>
        {` ${event.description} `}
      </span>
      {
        blog &&
        <Link key={event.user._id} to={`/users/${event.user._id}`}>
          {event.blog.title}
        </Link>
      }
      <span className='event-time'>
        {moment(event.time).fromNow()}
      </span>
    </div>
  )
}