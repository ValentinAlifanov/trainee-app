import React from 'react';
import {Link} from "react-router-dom";

import './HeaderLinks.css';

export default function HeaderLinks (props) {
    return (
        <div className={'authorization-box'}>
            <Link to={`/authLogin`} className={`button1-${props.place}`}>Log in</Link>
            <Link to={`/create`} className={`button2-${props.place}`}>Sign in</Link>
        </div>
    )
}