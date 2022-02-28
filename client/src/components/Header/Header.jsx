import React, {useContext} from 'react';

import Logo from '../Logo/Logo';
import Authorization from '../Authorization/Authorization';
import LinksLogIn from "../LinksLogIn/LinksLogIn";

import {UserAuthContext} from "../../App";
import './Header.css';

export default function Header () {
    const { userAuth } = useContext(UserAuthContext);

    return (
        <header className='header-box'>
            <div className="container header-container">
                <div className='header-logo-container'>
                    <Logo color='#242424'/>
                </div>
                <div className='header-authorization-container'>
                    {userAuth ? <LinksLogIn place='header'/> : <Authorization place='header'/>}
                </div>
            </div>
        </header>
    )
}