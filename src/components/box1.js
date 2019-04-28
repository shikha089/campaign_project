import React, { Component } from 'react'
import Portal from "./portal"; //imports Portal component from portal.js
import DateDetail from "./date"; //imports Date component from date.js

//Represents first column of the Campaign table 
class Box1 extends Component {
    render() {
        return (
            <div className="grp box1 d_cell p_relative" onClick={this.props.onClick}>
                <div id={this.props.id} className="modal" style={{ display: "none" }}>
                    <Portal /></div>
                <div className="d_inline_block">
                    {this.props.children}<br /> <DateDetail inputDate={this.props.date} /> days ago</div>
            </div>
        )
    }
}

export default Box1
