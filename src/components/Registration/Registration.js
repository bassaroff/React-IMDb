import React, { useState } from 'react'
import { SiThemoviedatabase } from 'react-icons/si'
import { useHistory } from 'react-router';
import Navbar from '../Navbar/Navbar'
import AuthService from '../Services/AuthService';

function Registration(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [rePassword, setRePassword] = useState('');
    const history = useHistory();


    const onChangeFullName = event => {
        setFullName(event.target.value);
    }
    const onChangeEmail = event => {
        setEmail(event.target.value);
    }
    const onChangePassword = event => {
        setPassword(event.target.value);
    }
    const onChangeRePassword = event => {
        setRePassword(event.target.value)
    }

    const handleRegistration = event => {
        
        if(password===rePassword){
            AuthService.register(fullName, email, password).then(
                r => {
                    alert(r.data.message);
                    history.push("/login");
                });
                event.preventDefault();
        }else{
            setRePassword('')
            setPassword('')
            alert("Password arent equal")
        }
    }
    return(
        <>
        
            
                <div className='d-flex flex-column w-100 justify-content-center align-items-center pb-5' style={{color:'black', background:'white', paddingTop:80}}>
                    <SiThemoviedatabase className="mt-5 mb-3 logo-icon" color='crimson'/>
                    <form style={{padding:30, borderRadius:5, border:'1px solid gray'}} onSubmit={handleRegistration}>
                        <label for="name">Your name</label>
                        <input className='form-control' type='text' id='name' name='name' onChange={onChangeFullName}></input>
                        <label for="email">Email</label>
                        <input className='form-control' type='text' id='email' name='email' onChange={onChangeEmail}></input>
                        <label for="password">Password</label>
                        <input className='form-control' type='password' id='password' name='password' onChange={onChangePassword}></input>
                        <label for="repassword">Re-password</label>
                        <input className='form-control' type='password' id='repassword' name='repassword'  onChange={onChangeRePassword}></input>
                        <button type='submit' className='form-control mt-4' style={{background:'#F1C860'}}>Create your TMDb account</button>

                        <div className='line mt-4 mb-3'></div>
                        <p>Already have account?<a href='/login'> Sign in</a></p>
                    </form>
                </div>
            
        </>
    )
}

export default Registration