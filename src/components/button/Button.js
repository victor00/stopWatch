import React, {Component} from 'react';



import "./styles.css";


const clock = {

};

class Button extends Component {
   
   constructor(props) {
        super(props);
        this.state = {
            buttonName: 'Hide',
            divClass: 'Show',
            startButton:0,
            stopButton:0,
            restartButton: 0
        }
   }  
   
 
   componentWillMount() {
       
   }
   
   changeState() {
       var currentState;
       if(this.state.divClass === 'Show') {
           currentState = 'Hide'
       }else {
           currentState = 'Show'
       }
       
   }



render () {
    return (
            
        <div className="button">
           <div className="actions">
                <button name="start" onClick={this.props.startButton}>
                     Start
                </button>
                <button name="stop" onClick={this.props.stopButton}>
                    Pause
                </button>
               <div name="hidden-button">
                    <button name="restart" onClick={this.props.restartButton}>
                        Restart
                    </button>
               </div>
            </div>
        </div>
  
    );
    }
}




export default Button;