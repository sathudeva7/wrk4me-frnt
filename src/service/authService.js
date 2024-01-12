import axios from 'axios';
import { API_URL } from '../constants';
// Import the required libraries or modules
// Function to register a user
async function registerUser(userData) {
	try {
		const response = await axios.post(`${API_URL}/register`, userData);
		// Handle successful registration
		return response.data;
	} catch (error) {
		// Handle registration error
		console.error(error);
		throw new Error('Registration failed');
	}
}

// Function to login a user
async function loginUser(credentials) {
	try {
		const response = await axios.post(`${API_URL}/login`, credentials);
		// Handle successful login
		return response.data;
	} catch (error) {
		// Handle login error
		console.error(error);
		throw new Error('Login failed');
	}
}

// Export the functions for use in other modules
export { registerUser, loginUser };
