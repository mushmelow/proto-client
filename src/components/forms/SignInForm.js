import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Message} from 'semantic-ui-react';
import Validator from "validator";
import InlineError from "../messages/InlineError"

class SignInForm extends React.Component {

	state={
		data:{
			email:'',
			password:''
		},
		loading: false,
		errors: {}
	};

	onChange = e => 
		this.setState({
			data:{ ...this.state.data, [e.target.name]: e.target.value}
		});

	onSubmit = e => {
		const errors = this.validate(this.state.data);
		this.setState({errors});
		if(Object.keys(errors).length ===0){
			this.props
				.submit(this.state.data)
				.catch(err => this.setState ({errors: err.response.data.errors}));
		}
	}

	validate = (data) => {
		const errors = {};
		if (!data.password) errors.password = "Can't be blank";
		if (!Validator.isEmail(data.email)) errors.email= "Invalid email";
		return errors;
	}

	render() {
		const {data, errors} = this.state;

		return (
			<Form onSubmit={this.onSubmit}> 

				{errors.global && <Message negative>
					<Message.Header> Something went wrong </Message.Header>
					<p>{errors.global} </p>
				</Message>
				}

				<Form.Field error={!!errors.email}>
					<label htmlFor="email"> Email </label>
					<input 
						type= "email" 
						id= "email" 
						name="email" 
						placeholder="example@example.com"
						value={data.email}
						onChange= {this.onChange}
					/>
				</Form.Field>
				{errors.email && <InlineError text={errors.email}/>}

				<Form.Field error={!!errors.Password}>
					<label htmlFor="password"> Password </label>
					<input 
						type= "password" 
						id= "password" 
						name="password" 
						placeholder="make it secure"
						value={data.password}
						onChange= {this.onChange}
					/>
					{errors.password && <InlineError text={errors.password}/>}
				</Form.Field>
				<Button primary> Sign In! </Button>
			</Form>
		);
	}
}

SignInForm.propTypes={
	submit: PropTypes.func.isRequired
};
export default SignInForm;