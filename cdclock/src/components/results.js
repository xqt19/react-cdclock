import React from 'react'

class Results extends React.Component{
    constructor(props){
        super(props)
        this.state={
            remaining: 1
        }
    }
    componentDidMount =() =>{
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
    

    render(){
        return(
            <div>
                {this.props.success && this.state.remaining > 0
                ? <div>Success!</div>
                : <div class="text-danger"> Time's Up! :D</div>}             
            </div>

        )
    }
}

export default Results