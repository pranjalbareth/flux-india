import React, { useContext, useState } from 'react';
import "./style.css"
import { SignInBtn } from '../../components';
import { UserContext } from '../../contexts/user';

export default function NavBar() {

    const [user, setUser] = useContext(UserContext).user

    return (
        <div className="navbar">
            <div style={{display:"flex"}}>
            <img style={{height:"30px", width:"auto"}} src='logo192.png' alt="logo" />
            <p style={{fontSize:"20px", fontWeight:"550", margin:"0px 10px"}}>flux</p>
            </div>

            {user ? <img className="navbar__img" src={user.photoURL} /> : <SignInBtn />}            
        </div>
    )
}
