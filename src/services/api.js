import axios from 'axios';

// Axios instance for API calls
// Base URL can be changed when backend is ready
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Placeholder URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
