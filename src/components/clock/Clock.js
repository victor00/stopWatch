import React, { Component } from 'react';

import "./styles.css";

class Clock extends Component {
    constructor(props) {
         super(props);
         this.state = {
             isStarted: false,
             actual_time: 0    
         }
         this.start_timer = this.start_timer.bind(this);
         this.stop_timer = this.stop_timer.bind(this);
         this.restart_timer = this.restart_timer.bind(this);
     } 
     
         
    increment_time() {
        this.setState({actual_time: this.state.actual_time + 1});
    }

    start_timer = () => {
        
        //Inicia o Contador
       if(!this.state.isStarted) {
            this.interval = setInterval(() => {
                this.increment_time()
             }, 1000); 
           
            //Após começar a contar volta a FLAG para falso
            this.setState((state, props) => ({
                isStarted: !state.isStarted
        }));       
       }        
    }

    stop_timer() {
        clearInterval(this.interval);
        
        // Ao pausar volta a Flag para Falso
        this.setState((state, props) => ({
            isStarted: false 
        }));
        
    }

    restart_timer() {
        if(this.state.actual_time > 0) {
            this.setState((state, props) => ({
                actual_time: state.actual_time = 0,
            }));    
        }
    }

    componentDidMount() {
        document.title = "Stopwatch"
     
        // this.start_timer();
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }
     
    render () {
    return (
        <div className="clock">
            <p>Stopwatch</p>
            <div name="initialState">{this.state.actual_time}</div>

            <div className="actions">
                <button name="start" onClick={this.start_timer}>
                     Start
                </button>
                <button name="stop" onClick={this.stop_timer}>
                    Pause
                </button>
                <button name="restart" onClick={this.restart_timer}>
                    Restart
                </button>
            </div>
        </div>
    );
    }
};

export default Clock;