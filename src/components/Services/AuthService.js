import axios from "axios";

const API_URL = "http://localhost:8000/auth/"
const newPassword = ''
class AuthService {
    login(email, password){
        return axios
            .post(API_URL + "login", {
                email,
                password
            })
            .then(response => {
                if(response.data.jwtToken){
                    localStorage.setItem("token", response.data.jwtToken);
                }

                return response.data;
            });
    }

    logout(){
        localStorage.removeItem("token");
        window.location.href="/login"
    }

    register(fullName, email, password){
        return axios.post(API_URL + "register", {
            email,
            password,
            fullName,
            newPassword
        })
    }

    getCurrentUser(){
        return axios.get(API_URL + "getuser/" + localStorage.getItem("token"));
    }

    getToken(){
        return JSON.parse(localStorage.getItem("token"));
    }
}

export default new AuthService();