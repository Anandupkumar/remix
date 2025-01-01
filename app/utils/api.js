import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export const login = async (phoneNumber) => {
    try {
        const response = await api.post('/login', {
            phoneNumber
        });
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};