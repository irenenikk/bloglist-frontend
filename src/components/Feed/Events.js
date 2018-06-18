import React from 'react'
import Event from './Event'

export default ({ events }) => {
  return (
    <div className="list">
      <h2>See what you've missed</h2>
      {
          events.map(e => {
              return <Event key={`${e.user.username}-${e.time}`} event={e} />
          })
      }
    </div>
  )
}