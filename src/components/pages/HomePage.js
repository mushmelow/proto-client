import React from 'react';
import {Link} from 'react-router-dom';

const HomePage =(props) =>(

	<div>
		<h1>HomePage </h1>
		<Link to="/signin"> Sign In </Link>
	</div>

);

export default HomePage;