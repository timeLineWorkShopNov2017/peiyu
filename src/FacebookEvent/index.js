import React from 'react'
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js'

const FacebookEvent  = (props) => (
  <div>
    <div
      className="FacebookPoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
    </div>
    <div
      className="FacebookText"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
      Facebook!
    </div>
  </div>

)


export default FacebookEvent
