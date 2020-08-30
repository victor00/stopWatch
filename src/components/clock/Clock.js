import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
         super(props);
         this.state = {
             actual_state: 'stopped',
             actual_time: 0
         }
     } 

         
    increment_time() {
        this.setState({actual_time: this.state.actual_time + 1});
    }

    componentDidMount() {
        const interval = setInterval(() => {
            this.increment_time()
        }, 1000);
    }
     
    render () {
    return (
        <div>{this.state.actual_time}</div>
    );
    }
};

export default Clock;