import axios from 'axios';

export default {
	user: {
		signup: (credentials) => 
			axios.post('users/signup', credentials)
			.then(res => res.data.user),
		login: (credentials) => 
			axios.post('users/signin', credentials)
			.then(res => {
				const token = res.data.token;
				localStorage.setItem('jwtTokenA', token);
				res.data.user;
			}
		)	
	}
}