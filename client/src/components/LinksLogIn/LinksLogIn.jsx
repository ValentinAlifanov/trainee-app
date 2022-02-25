import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import './LinksLogIn.css';

export default function LinksLogIn ({place}) {
    const navigate = useNavigate();
    const exitClick = () => {
        localStorage.userLogIn = '';
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
    return (
        <nav className={'link-box'}>
            <ul className='ul-header-login'>
                <li className='li-header-login'>
                    <NavLink to={`/mainLogIn`} style={({ isActive }) => isActive ? activeStyle : noActiveStyle}>All articles</NavLink>
                </li>
                <li className='li-header-login'>
                    <NavLink to={`/myArticles`} style={({ isActive }) => isActive ? activeStyle : noActiveStyle}>My articles</NavLink>
                </li>
                <li className='li-header-login'>
                    <NavLink to={`/addArticles`} style={({ isActive }) => isActive ? activeStyle : noActiveStyle}>Add article</NavLink>
                </li>
                <li className='li-header-login'>
                    <NavLink to={`/profile`} style={({ isActive }) => isActive ? activeStyle : noActiveStyle}>Profile</NavLink>
                </li>
            </ul>
            <button className={`button-login-${place}`} onClick={(exitClick)} >Logout</button>
        </nav>
    )
}
