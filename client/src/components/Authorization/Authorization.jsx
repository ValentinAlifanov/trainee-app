import React from 'react';
import {Link} from "react-router-dom";

import './Authorization.css';

export default function Authorization (props) {
    return (
        <div className={'authorization-box'}>
            <Link to={`/authLogin`} className={`button1-${props.place}`}>Log in</Link>
            <Link to={`/create`} className={`button2-${props.place}`}>Sign in</Link>
        </div>
    )
}