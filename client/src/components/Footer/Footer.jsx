import React, {useContext} from 'react';

import Logo from '../Logo/Logo';
import Authorization from '../Authorization/Authorization';
import LinksLogIn from "../LinksLogIn/LinksLogIn";

import {UserAuthContext} from "../../App";
import './Footer.css';


export default function Footer () {
    const { userAuth } = useContext(UserAuthContext);
    return (
        <footer className='footer-box'>
            <div className='footer-up-box container'>
                <div className='footer-logo-container'>
                    <Logo color='#FFFFFF'/>
                </div>
                <div className='footer-authorization-container'>
                    {userAuth ? (<LinksLogIn place='footer'/>) : (<Authorization place='footer'/>)}
                </div>
            </div>
            <div className='footer-down-box container'>
                <p className='footer-down__text1'>© 2021 Justice-it. All rights reserved.</p>
                <p className='footer-down__text2'>© 2021 Justice-it. All rights reserved.</p>
            </div>
        </footer>
)
}