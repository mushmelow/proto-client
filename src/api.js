import axios from 'axios';

export default {
	user: {
		login: (credentials) => 
			axios.post('users/signin', {credentials}).then(res => res.data.user)
	}
}