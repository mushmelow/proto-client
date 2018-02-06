import React from 'react';
import axios from 'axios';

var listStyle = {listStyleType:"none"};

class ApplianceInfos extends React.Component{
  constructor (props){
    super();
    this.state = {
      name: '',
      productVersion: '',
      serialNumber:''
    }
  }

  componentDidMount() {
    axios.get('/system-status')
    .then(response => {
      this.setState({
        name: response.data[0].name, 
        productVersion: response.data[0].productVersion, 
        serialNumber: response.data[0].serialNumber
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  };
  
	render(){
		return(
    	<div className="dashboard-element">
        <h4 className="dashboard-element-title">Appliance Infos</h4>
        <div>  
          <ul id="applianceInfos" style={listStyle}>
            <li><b>Name: </b>{this.state.name}</li>
            <li><b>Product Version: </b>{this.state.productVersion}</li>
            <li><b>Serial Number: </b>{this.state.serialNumber}</li>
            <li><b>System Time:</b></li>
            <li><b>Uptime:</b></li>
          </ul>
        </div>
      </div>
		);
	}
}

export default ApplianceInfos;