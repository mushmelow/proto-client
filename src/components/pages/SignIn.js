import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignInForm from '../forms/SignInForm';
import {login} from '../../actions/auth';

class SignIn extends React.Component{
submit = (data) => 
	this.props.login(data).then(()=> 
		this.props.history.push("/"));

	render(){
		return(
			<div>
				<h1> Sign In</h1>

				<SignInForm submit={this.submit}/>

			</div>

		);
	}
}


SignIn.propTypes={
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
};

export default connect(null, {login})(SignIn);