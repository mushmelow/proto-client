import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';

class NavigationBarConnected extends Component {

    render() {
        return (
       		<div>
					  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>
					  <div class="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul class="navbar-nav mr-auto">
					      <li class="nav-item active">
					        <a class="nav-link" href="#">System Status<span class="sr-only">(current)</span></a>
					      </li>
					      <li class="nav-item dropdown">
					        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Administration
					        </a>
					        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a class="dropdown-item" href="#">Virtual Tapes</a>
					          <a class="dropdown-item" href="#">External Data</a>
					          <a class="dropdown-item" href="#">Jobs</a>
					          <a class="dropdown-item" href="#">Virtual Devices</a>
					          <a class="dropdown-item" href="#">Mounts and Locks</a>
					          <a class="dropdown-item" href="#">System Tasks</a>
					        </div>
					      </li>
					      <li class="nav-item dropdown">
					        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Configuration
					        </a>
					        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a class="dropdown-item" href="#">Virtual Devices</a>
					          <a class="dropdown-item" href="#">Tapes and Pools</a>
					          <a class="dropdown-item" href="#">Policies</a>
					          <a class="dropdown-item" href="#">Data Encryption</a>
					          <a class="dropdown-item" href="#">System</a>
					          <a class="dropdown-item" href="#">ZFS Vaults</a>
					        </div>
					      </li>
					      <li class="nav-item dropdown">
					        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Reports
					        </a>
					        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a class="dropdown-item" href="#">Storage Report</a>
					          <a class="dropdown-item" href="#">Export Report</a>
					        </div>
					      </li>
					      <li class="nav-item dropdown">
					        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Security
					        </a>
					        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a class="dropdown-item" href="#">Access Control</a>
					          <a class="dropdown-item" href="#">Certificates</a>
					          <a class="dropdown-item" href="#">Passwords</a>
					        </div>
					      </li>
					      <li class="nav-item dropdown">
					        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Support
					        </a>
					        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a class="dropdown-item" href="#">System Updates</a>
					          <a class="dropdown-item" href="#">SG Map</a>
					          <a class="dropdown-item" href="#">Logs</a>
					          <a class="dropdown-item" href="#">Trouble Shooting</a>
					        </div>
					      </li>
					      <li class="nav-item">
					        <a class="nav-link" href="#">About</a>
					      </li>
					    </ul>
					    <ul class="nav navbar-nav navbar-right">
					      <li class="nav-item inactive">
					        <a class="nav-link" href="#">admin@vts42</a>
					      </li>
					      <li class="nav-item">
					        <p class="navbar-btn">
	                  <a href="#" className="nav-link" onClick={()=>{this.props.logout()}}>Logout</a>
					        </p>
					      </li>
					    </ul>
					  </div>
					</div>   
        );
    }
}

export default NavigationBarConnected;