import React from 'react';

var listStyle = {listStyleType:"none"};

class ApplianceInfos extends React.Component{

	render(){
		return(
    	<div className="dashboard-element">
        <h4 className="dashboard-element-title">Appliance Infos</h4>
        <div>  
          <ul id="applianceInfos" style={listStyle}>
          </ul>
        </div>
      </div>
		);
	}
}

export default ApplianceInfos;