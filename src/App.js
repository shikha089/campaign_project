import React, { Component } from 'react';
import './App.css';
import CampaignDetails from "./components/campaigndetails"; //Imports Campaign table from campaigndetails.js


class App extends Component {

  // Initial State 
  state = {
    data: []
  }

  // Fetch the data from server 
  componentDidMount() {
    fetch('http://www.json-generator.com/api/json/get/cgBRzDWhSG?indent=2')
      .then(response => response.json())
      .then(data => this.setState({
        data
      }))
  }

  render() {
    return (
      <div className="tab_wrapper">
        <span className="w1">Manage</span> <span className="w2"> Campaigns</span>
        <CampaignDetails details={this.state.data} />
      </div>
    );
  }
}

export default App;
