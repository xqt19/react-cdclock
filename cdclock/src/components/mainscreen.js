import './mainscreen.css';
import { Button } from 'react-bootstrap';
import React from 'react';

class MainScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      remaining: Math.floor(Math.random() *5) + 5,
    }
  }
  componentDidMount() {
    // every 1 sec trigger the tick() function
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
    tick=()=>{
        //every 1 sec update the state
        if (this.state.remaining >0){
            this.setState({
            remaining: this.state.remaining -1
            });
        };
    }
    reset=()=>{
        this.setState({
           remaining: this.state.remaining +20 
        });
    };

  render(){
    return (
      <div className="Mainscreen">
        <header className="Mainscreen-header">
            This is the Countdown. <br />
            {this.state.remaining >0 ? 
            <div>The time is {this.state.remaining}.</div> 
            : <div>goodbye</div>}
            <button type="button" class="btn btn-primary" onClick={this.reset}>Primary</button>
            {this.state.remaining}
        </header>
      </div>
    );    
  }
}

export default MainScreen;
