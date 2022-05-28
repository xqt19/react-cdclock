import './mainscreen.css';
import React from 'react';
import Results from './results';

class MainScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        remaining: this.mathcalc(),
        success: ""
    }
  }
  mathcalc = () =>{
      let min = parseInt(this.props.min)
      let max = parseInt(this.props.max)
      let gap = max-min
      let random = Math.random()
      let num = ( random * gap)
      let num2 = num + min
      let result = Math.floor(num2 * 60)
    return result
  }

  componentDidMount() {
    let succ = Math.random()*100
    console.log(succ, this.props.succ)
    if (this.state.success===""){
        console.log("inside")
        if(succ < this.props.succ){
            this.setState({
                success: true
            })            
        }else{
            this.setState({
                success: false
            })   
        }
    }
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
        this.props.gotoscreen("dialo")
    };
    cut=()=>{
        this.setState({
            remaining: 2
        })
    }

  render(){
    return (
      <div className="Mainscreen">
        <header className="Mainscreen-header">
            This is the Countdown. <br />
            {this.state.remaining >0 ? 
            <div>The time is {Math.floor(this.state.remaining / 60)} minute(s) and {this.state.remaining % 60} seconds.</div> 
            : <Results success={this.state.success}/>}
            <button type="button" class="btn btn-danger" onClick={this.reset}>Go Back</button>
            <button type="button" class="btn btn-primary" onClick={this.cut}>Cut to 2</button>
        </header>
      </div>
    );    
  }
}

export default MainScreen;
