import React, { Component } from 'react';
import Cal from "./calendar"; //imports Calendar component from calendar.js


//Represents last column of the Campaign table 
class Box4 extends Component {
    render() {
        return (
            <div className="grp box4 d_cell">
                <div className="d_table width_100 c_align">
                    <div className="d_row">
                        <div className="d_cell padding_10">
                            <img className="img_4" src="https://i.imgur.com/7hC6yPE.png" alt="csv"/><br /><span className="small_font">CSV</span>
                        </div>
                        <div className="d_cell padding_10">
                            <img className="img_4" src="https://i.imgur.com/nrai1zh.png" alt="report"/><br /><span className="small_font">REPORT</span>
                        </div>
                        <div className="d_cell p_relative">
                            <div className="d_inline_block icon" onClick={this.props.onClick}><img className="img_4" src="https://i.imgur.com/VFFOjPk.png" alt="calendar"/>
                                <div id={this.props.id2} className="cal" style={{ display: "none" }}>
                                    <Cal /></div>
                            </div>
                            <br />
                            <span className="small_font cname">SHEDULE AGAIN</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Box4
