import React, { Component } from 'react'

//Represents third column of the Campaign table 
class Box3 extends Component {
    render() {
        return (
            <div className="grp box3 d_cell" onClick={this.props.onClick}>
                <div className="pricing">
                    <img className="price_img" src="https://i.imgur.com/peUVLNQ.png" alt="pric_details"/>
                    <br />
                    VIEW <br />PRICING
</div>
            </div>
        )
    }
}

export default Box3
