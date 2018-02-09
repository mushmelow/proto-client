import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';


class NavigationBarDisconnected extends Component {

    render() {
        return (
        	<div>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>
					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav mr-auto navbar-right">
					      <li className="nav-item">
					        <Link to="/signup" className="nav-link">Signup</Link>
					      </li>
					      <li className="nav-item">
					        <Link to="/login" className="nav-link">Login</Link>
					      </li>
					    </ul>
					  </div>
				  </div>
        );
    }
}

export default NavigationBarDisconnected;
