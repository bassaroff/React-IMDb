import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Navbar/Navbar';
import DbService from '../Services/DbService';
import AuthService from '../Services/AuthService';
import { Redirect } from 'react-router';

function Profile(){
    const [redirect, setRedirect] = useState(null);
    const [user, setUser] = useState({});
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reNewPassword, setReNewPassword] = useState("");

    useEffect(() => {
        AuthService.getCurrentUser().then(response => {
            console.log(response.data)
            setUser(response.data);
        });

        if (!user) setRedirect("/");
    }, []);

    if (redirect) {
        return <Redirect to={this.state.redirect}/>;
    }

    const onNameChangeSubmit = event => {
        DbService.changeName(user).then(r => {
            setUser(r.data)
        });
        event.preventDefault();
    }

    const onChangeEmail = event => {
        setUser({...user, fullname: event.target.value});
        console.log(user)
    }

    const onChangeOldPassword = event => {
        setOldPassword(event.target.value);
    }

    const onChangeNewPassword = event => {
        setNewPassword(event.target.value);
    }

    const onChangeReNewPassword = event => {
        setReNewPassword(event.target.value);
    }

    const onPasswordChangeSubmit = event => {
        if (newPassword === reNewPassword) {
            var copy = Object.assign({}, user, {password: oldPassword})
            changePass(copy, newPassword);
        } else {
            alert("passwords do not match")
        }
        event.preventDefault();
    }

    function changePass(inputData, newPass) {
        DbService.changePassword(inputData, newPass).then(r => {
            setUser(r.data)
        }).catch(error => {
            alert(error.response.data.message);
        });
    }

    
    return(
    <>
        <div className='container' style={{background:'white', color:'black', paddingTop:80}}>
            <div className='row mt-4'>
                <div className='col-8'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <img src='https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png' style={{width:250, borderRadius:'50%'}}></img>
                        <div>
                            <h3>{user.fullname}</h3>
                            <form onSubmit={onNameChangeSubmit}>
                                <div className='form-group'>
                                    <input className='form-control'
                                        type={"text"}
                                        value={user.fullname}
                                        onChange={onChangeEmail}/>
                                </div>
                                <button variant={"success"} type={"submit"}>
                                    Change
                                </button>
                            </form>
                            <form onSubmit={onPasswordChangeSubmit} className="mt-5">
                                <div className='form-group'>
                                    <label>Old password</label>
                                    <input className='form-control'
                                        type={"password"}
                                        value={oldPassword}
                                        onChange={onChangeOldPassword}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>New password</label>
                                    <input className='form-control'
                                        type={"password"}
                                        value={newPassword}
                                        onChange={onChangeNewPassword}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Re New password</label>
                                    <input className='form-control'
                                        type={"password"}
                                        value={reNewPassword}
                                        onChange={onChangeReNewPassword}
                                    />
                                </div>
                                <button variant={"success"} type={"submit"}>
                                    Change
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    
                </div>   
                <div className="line"></div>
                <div className='my-2 d-flex justify-content-between align-items-center w-100' style={{paddingLeft:15, paddingRight:15}}>
                    <h4 color={'gray'} >Recently Viewed</h4>
                    <a href='' style={{fontSize:15}}>Clear your history</a>
                </div>
            </div> 
        </div>
        </>
        );
}

export default Profile