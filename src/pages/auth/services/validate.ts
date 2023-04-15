import axios from 'axios'

const getToken = () =>{
    return localStorage.getItem('token');
}


export const validateToken = async () =>{
    try {
        if(!getToken()) return false;
        const res = await axios.get('https://chat-pro-api-production.up.railway.app/validate', {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        return res.data;
    } catch (error) {
        return false;
    }
}