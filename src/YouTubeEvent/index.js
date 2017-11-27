import React from 'react'
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js'

const YouTubeEvent = (props) => (
  <div>
    <div
      className="youTubePoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
    </div>
    <div
      className="youtubeText"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
      Youtube!
    </div>
  </div>

)


export default YouTubeEvent
