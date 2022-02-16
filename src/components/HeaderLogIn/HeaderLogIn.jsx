import React from 'react';

import Logo from '../Logo/Logo';
import LinksLogIn from "../LinksLogIn/LinksLogIn"

import './HeaderLogIn.css';


export default function HeaderLogIn () {
    return (
        <header className='header-box'>
            <div className='header-logo-container'>
                <Logo color='#242424'/>
            </div>
            <div className='header-authorization-container'>
                <LinksLogIn place='header'/>
            </div>
        </header>
    )
}