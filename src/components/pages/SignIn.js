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
			<div className="row">
				<div className="col"></div>
				<div className="col-6">
					<br/>
					<br/>
					<h2>Login Form</h2>
					<br/>
					<SignInForm submit={this.submit}/>
				</div>
				<div className="col"></div>
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