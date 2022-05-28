import './Component.css';
import { Button } from 'react-bootstrap';
import React from 'react';

class Component extends React.Component {
  constructor(props){
    super(props)
    this.state={
      date: new Date().toLocaleTimeString()
    }
  }
  componentDidMount() {
    // every 1 sec trigger the tick() function
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    //every 1 sec update the state
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }

  render(){
    return (
      <div className="Component">
        <header className="Component-header">
            This is the Component. <br />
            The time is {this.state.date}.
            <button type="button" class="btn btn-primary">Primary</button>
        </header>
      </div>
    );    
  }
}

export default Component;
