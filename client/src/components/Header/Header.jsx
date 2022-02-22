import React from 'react';

import Logo from '../Logo/Logo';
import Authorization from '../Authorization/Authorization';

import './Header.css';


export default function Header () {
    return (
        <header className='header-box'>
            <div className='header-logo-container'>
                <Logo color='#242424'/>
            </div>
            <div className='header-authorization-container'>
                <Authorization place='header'/>
            </div>
        </header>
    )
}