import React, { Component } from 'react'

//Represents second column of the Campaign table 
class Box2 extends Component {
    render() {
        return (
            <div className="grp box2 d_cell" onClick={this.props.onClick}>
                <div className="d_table">
                    <div className="d_row">
                        <div className="d_cell">
                            <img className="img_sec img_padding" src={this.props.img} alt="campaign"/>
                        </div>
                        <div className="d_cell">{this.props.campaign} <br />{this.props.country}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Box2
