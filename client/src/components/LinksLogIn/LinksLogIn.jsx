import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import {UserAuthContext} from "../../App";

import './LinksLogIn.css';

export default function LinksLogIn ({place}) {
    const { setUserAuth } = useContext(UserAuthContext);
    const navigate = useNavigate();
    const exitClick = () => {
        localStorage.userLogIn = '';
        setUserAuth(false)
        return navigate('/')
    }

    const activeStyle =  place === 'header' ?
        ({textDecoration: "none",
            borderBottom: "1px solid #242424",
            paddingBottom: "8px",
            color: "#242424",
        }) :
        ({textDecoration: "none",
            borderBottom: "1px solid #FFFFFF",
            paddingBottom: "8px",
            color: "#FFFFFF"});

    const noActiveStyle =
        place === 'header' ? ({
            textDecoration: 'none',
            borderBottom: "none",
            color: "#8C8C8C",
        }) : ({
            textDecoration: 'none',
            borderBottom: "none",
            color: '#FFFFFF',
        });

    const links = [
        {
            path : '/',
            text : 'All articles'
        },
        {
            path : '/myArticles',
            text : 'My articles'
        },
        {
            path : '/addArticles',
            text : 'Add article'
        },
        {
            path : '/profile',
            text : 'Profile'
        },

    ]

    return (
        <nav className='link-box'>
            <ul className='ul-header-login'>
                {links.map(item =>
                    <li className='li-header-login' key={item.path}>
                        <NavLink to={item.path} style={({ isActive }) => isActive ? activeStyle : noActiveStyle} >{item.text}</NavLink>
                    </li>
                )}
            </ul>
            <button className={`button-login-${place}`} onClick={exitClick} >Logout</button>
        </nav>
    )
}
