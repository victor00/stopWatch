import React, { Component } from 'react';
import moment from 'moment';
import Button from '../button/Button';

import "./styles.css";

class Clock extends Component {
    
    constructor(props) {
         super(props);
         this.state = {
             count: 0,
             isStarted: false,
             actual_time: moment().hours(0).minutes(0).seconds(0).format('HH : mm : ss'),
             laps: []
         }
     } 
     
         
    increment_time() { 
        
        this.setState((state) => ({
                actual_time : moment().hours(0).minutes(0).seconds(state.count).format('HH : mm : ss'),
                count: state.count+1
        }));
        
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

    lap = () => {
        this.setState((state, props) => ({
            laps: [...this.state.laps, this.state.actual_time]
        }));
    }
    
    stop_timer = () => {
        
            // Ao pausar volta a Flag para Falso
            this.setState((state, props) => ({
                isStarted: false 
            }));
            clearInterval(this.interval);
       
    }

    restart_timer = () => {          
        
        if(this.state.count > 0) {
            this.setState((state, props) => ({
                actual_time:  moment().hours(0).minutes(0).seconds(0).format('HH : mm : ss'),
                count: 0,
                lap: []
            }));    
        }
    }

     
    render () {
        return (
            <div className="container">
                    <header><p>Stopwatch</p></header>
                    <main>
                        <div name="initialState">{this.state.actual_time}</div>
                        <div className="buttonClass">
                            {!this.state.isStarted ? 
                                <>
                                <Button action={this.start_timer} displayBtnName="Start" />
                                {this.state.count>0 ?
                                    <Button action={this.restart_timer} displayBtnName="Restart" />
                                    : null
                                }   
                                </>
                                :
                                <>
                                <Button action={this.stop_timer} displayBtnName="Stop" />
                                {this.state.count>0 ?
                                    <Button action={this.restart_timer} displayBtnName="Restart" />
                                    : null
                                }
                                {this.state.count>0 ?
                                    <Button action={this.lap} displayBtnName="Lap" />
                                    : null
                                }
                                </>
                            }
                            
                        </div>
                    </main>
                    <aside>
                        <p>Laps: </p>
                            <ul>                  
                                {this.state.isStarted ?
                                    <>
                                    {this.state.count>0 ?
                                        this.state.laps.map((lap) => 
                                        <ol>
                                            <span>{lap}</span>
                                        </ol>
                                        )
                                        : null
                                    } 
                                    </>
                                    :
                                    <>
                                    </>
                                }                                     
                            </ul>
                     </aside>
             </div>
        );
    }
};

export default Clock;