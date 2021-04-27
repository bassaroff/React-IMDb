import React, {useState, Component, useEffect} from 'react'
import { AiOutlineClose, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'
import SidebarData from './SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'
import { SiThemoviedatabase } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import AuthService from '../Services/AuthService'

function Navbar(props){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    useEffect(()=>{

    },[sidebar]);

    function logout() {
        AuthService.logout()  
    }
    return(
        <>
        <IconContext.Provider value={{color:'crimson'}}>
            <div className={props.black ? 'navbar black' : 'navbar'}>
                <Link to="/" className="logo-bar">
                    <SiThemoviedatabase className="logo-icon"/>
                </Link>
                <Link className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose/>
                        </Link>
                    </li>
                    {props.isLogin ? 
                    <>
                        <li className='nav-text'>
                            <Link to='/profile'>
                                <CgProfile/>
                                <span>Profile</span>
                            </Link>
                        </li>
                    </>
                    :
                    <>
                    <li className='nav-text'>
                        <Link to='/signin'>
                            <AiOutlineLogin/>
                            <span>Sign In</span>
                        </Link>
                    </li>
                    </>
                    }
                    
                    {SidebarData.map((item, index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.url}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    {props.isLogin ? 
                    <>
                        <li className='nav-text'>
                            <Link to='/login' onClick={logout}>
                                <AiOutlineLogout/>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </>
                    :
                    <>
                    </>
                    }
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}
export default Navbar