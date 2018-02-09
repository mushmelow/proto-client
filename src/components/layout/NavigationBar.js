import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationBarConnected from './NavigationBarConnected';
import NavigationBarDisconnected from './NavigationBarDisconnected';
import {logout} from '../../actions/auth'
const NavigationBar = ({isAuthenticated, logout}) =>(

		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			{isAuthenticated ? <NavigationBarConnected logout={logout}/> : <NavigationBarDisconnected/>}
		</nav>
);


function mapStateToProps(state){
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, {logout})(NavigationBar);