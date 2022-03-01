import React from 'react';

import {ReactSVG} from "react-svg";
import {Link} from "react-router-dom";

import logo from './Logo.svg'
import './Logo.css';

export default function Logo (props) {
    return (
        <div className={'logo-box'}>
            <Link to={`/`}>
                <ReactSVG src={logo} style={{fill:props.color}} alt="Logo" ></ReactSVG>
            </Link>
        </div>
    )
}