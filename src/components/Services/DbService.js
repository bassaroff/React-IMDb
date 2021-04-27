import axios from 'axios'

const getUser = "http://localhost:8000/getUser/"
const changePass ="http://localhost:8000/changepass/"
const changeName ="http://localhost:8000/changename/"


class DbService{
    changeName(user){
        return axios.put(changeName, {
            id: user.id,
            email: user.email,
            password: user.password,
            fullname: user.fullname,
            roles: user.roles})
    }

    changePassword(user, pass){
        return axios.put(changePass, {
            email: user.email,
            password: user.password,
            fullName: user.fullName,
            newPassword: pass
        });
    }
}
export default DbService