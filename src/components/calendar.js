import React, { Component } from 'react'
import Calendar from 'react-calendar'; //Imports Calendar from react library

//Represents Calendar component
class Cal extends Component {
    // Initial State
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })  //Changes date at setState

    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}

export default Cal;
