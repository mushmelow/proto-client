import React from 'react';
import SignInForm from '../forms/SignInForm';

class SignIn extends React.Component{
submit = (data) => {
	console.log(data);
}

	render(){
		return(
			<div>
				<h1> Sign In</h1>

				<SignInForm submit={this.submit}/>

			</div>

		);
	}
}


export default SignIn;