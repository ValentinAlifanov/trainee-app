import React from 'react';

import Logo from '../Logo/Logo';
import LinksLogIn from "../LinksLogIn/LinksLogIn";

import './FooterLogIn.css';


export default function FooterLogIn () {
    return (
        <footer className='footer-box'>
            <div className='footer-up-box'>
                <div className='footer-logo-container'>
                    <Logo color='#FFFFFF'/>
                </div>
                <div className='footer-authorization-container'>
                    <LinksLogIn place='footer'/>
                </div>
            </div>
            <div className='footer-down-box'>
                <p className='footer-down__text1'>© 2021 Justice-it. All rights reserved.</p>
                <p className='footer-down__text2'>© 2021 Justice-it. All rights reserved.</p>
            </div>
        </footer>
)
}