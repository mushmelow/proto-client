import axios from 'axios';

export default {
	user: {
		login: (credentials) => 
			axios.post('users/signup', credentials)
			.then(res => res.data.user)
	}
}