import React from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';
import Authorization from '../Authorization/Authorization';

export default function Footer () {
    return (
        <footer className='footer-box'>
            <div className='footer-up-box'>
                <div className='footer-logo-container'>
                    <Logo color='#FFFFFF'/>
                </div>
                <div className='footer-authorization-container'>
                    <Authorization place='footer'/>
                </div>
            </div>
            <div className='footer-down-box'>

            </div>
        </footer>
)
}