import axios from "axios"

const api=axios.create({
    baseURL: 'https://testpro-server-x05k.onrender.com/api/'
    // headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
});

export default api;