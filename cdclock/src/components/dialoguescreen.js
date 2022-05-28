import './dialoguescreen.css';
import React from 'react';
import MainScreen from './mainscreen';

class DialoScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        currentscreen: "dialoscreen",
    }
  }

  gotomain =()=>{
      this.setState({
          currentscreen: "mainscreen"
      })
  }

  render(){
    return (
      <div className="Dialoscreen">
        <header className="Dialoscreen-header">
            {this.state.currentscreen == "dialoscreen"
            ? <div>
                This is the Countdown. <br />
                <button type="button" class="btn btn-primary" onClick={this.gotomain}>Primary</button>
            </div>
            : <div>
                <MainScreen />
            </div>
            }

        </header>
      </div>
    );    
  }
}

export default DialoScreen;
