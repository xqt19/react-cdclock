import './dialoguescreen.css';
import React from 'react';
import MainScreen from './mainscreen';

class DialoScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        currentscreen: "dialo",
        min: 0,
        max: 0,
        succ: 0,
    }
  }
  triggermainscreen =()=>{
      this.gotoscreen("main")
  }

  gotoscreen =(word)=>{
      this.setState({
          currentscreen: word
      })
  }
  updateMin =(event)=>{
        this.setState({
            min: event.target.value
        })
  }
  updateMax =(event)=>{
    this.setState({
        max: event.target.value
    })
}
updateSucc =(event)=>{
    this.setState({
        succ: event.target.value
    })
}

  render(){
    return (
      <div className="Dialoscreen">
        <header className="Dialoscreen-header">
            {this.state.currentscreen === "dialo"
            ? <div>
                This is the Countdown. <br />
                <label for="min">Minimum (mins):</label>
                <input type="number" id="min" name="min" defaultValue="0" min="0" max="60" onChange={this.updateMin}></input>
                <br />
                <label for="max">Maximum (mins):</label>
                <input type="number" id="max" name="max" defaultValue="0" min="1" max="60" onChange={this.updateMax}></input>
                <br />
                <label for="max">Success (%):</label>
                <input type="number" id="max" name="max" defaultValue="0" min="0" max="100" onChange={this.updateSucc}></input>
                <br />
                <button type="button" class="btn btn-primary" onClick={this.triggermainscreen}>Submit</button>
            </div>
            : <div>
                <MainScreen min={this.state.min} max ={this.state.max} succ={this.state.succ} gotoscreen={this.gotoscreen}/>
            </div>
            }

        </header>
      </div>
    );    
  }
}

export default DialoScreen;
