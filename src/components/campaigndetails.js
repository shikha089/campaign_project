import React, { Component } from 'react';
import CategoryFilter from "./categoryfilter";
import Header from './table_header'; //imports Table Header column from table_header.js
import Box1 from "./box1"; //Imports first column of the table
import Box2 from "./box2"; //Imports second column of the table
import Box3 from "./box3"; //Imports third column of the table
import Box4 from "./box4"; //Imports last column of the table

export class CampaignDetails extends Component {

    state = {
        //Initial state
        activeCategory: "All",
        show: false,
        portal: false
    }

    // Function to change the type of campaign
    handleChange = (status) => {
        this.setState({
            activeCategory: status
        })
    }

    //Function to display Portal when evoked
    handlePortal = (val, valid) => {
        if (valid === false) {
            document.getElementById(val).style.display = "block";
        } else {
            document.getElementById(val).style.display = "none";
        }
        this.setState({
            portal: !this.state.portal
        })

    }
    
    //Function to Calendar Portal when evoked
    handleId = (val, valid) => {
        if (valid === false) {
            document.getElementById(val).style.display = "block";
        } else {
            document.getElementById(val).style.display = "none";
        }
        this.setState({
            show: !this.state.show,

        })

    }
    render() {
        const { activeCategory } = this.state
        //Code for showing Campaign table
        var Campaigns = this.props.details.map(d => {
            if (d.status.indexOf(activeCategory) < 0 && activeCategory !== "All") return null;
            return (
                <div className="c_pointer">
                    <Box1 onClick={() => this.handlePortal(d.id1, this.state.portal)} id={d.id1} date={d.date}>{d.date}</Box1>
                    <Box2 onClick={() => this.handlePortal(d.id1, this.state.portal)} img={d.img} campaign={d.campaign} country={d.country}></Box2>
                    <Box3 onClick={() => this.handlePortal(d.id1, this.state.portal)}></Box3>
                    <Box4 onClick={() => this.handleId(d.id2, this.state.show)} id2={d.id2}></Box4>
                </div>
            )
        })

        return (
            <div className="wrapper">
                <CategoryFilter filterdata={this.props.details} onChange={this.handleChange} />
                <Header />
                {Campaigns}
            </div>
        )
    }
}

export default CampaignDetails;




