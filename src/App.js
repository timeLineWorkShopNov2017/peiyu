import React, { Component } from 'react';
import './App.css';
import { loadEvents } from './lib/loadEvents.js';
import Event from './Event';
import YouTubeEvent from './YouTubeEvent';
import FacebookEvent from './FacebookEvent';

class App extends Component { // extends是繼承的意思
  constructor() {
     super()
     this.state = {
       events: [],
       eventsOfYoututbe: [],
       eventOfFacebook:[],
     }
  }
 componentDidMount() {
    loadEvents().then(events => {
      const eventsOfYoututbe = events.filter((event) => {
        if (event.targettedResource.title.indexOf('YouTube') >= 0) {
          return true;
        } else {
          return false;
        }
      })
      const eventOfFacebook = events.filter((event)=> {
          if (event.targettedResource.title.indexOf('Facebook') >= 0) {
            return true;
          } else {
            return false;
          }
      })
      this.setState({ eventOfFacebook })
      this.setState({ eventsOfYoututbe })
      this.setState({ events })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="timelineContainer">
          <div className="horLine"></div>
          {this.state.events.map((event) => (
            <Event event={event} key={event.id}/>
          ))}
          {this.state.eventOfFacebook.map((event) => (
            <YouTubeEvent event={event} key={event.id}/>
          ))}
          {this.state.eventsOfYoututbe.map((event) => (
            <FacebookEvent event={event} key={event.id}/>
          ))}
        </div>
      </div>
    )
  }
}


export default App;
