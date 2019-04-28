import React from 'react';

//Represents table Header component
const Header = props => {
    return (
        <div className="d_table p_relative width_100">
            <div className="top box1 d_cell">Date</div>
            <div className="top box2 d_cell">Camapign</div>
            <div className="top box3 d_cell">View</div>
            <div className="top box4 d_cell">Actions</div>
        </div>
    )
}
export default Header;

