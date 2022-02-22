import React from 'react';
import './Logo.css';
import logo from './Logo.svg'
import {ReactSVG} from "react-svg";

export default function Logo (props) {
    return (
        <div className={'logo-box'}>
            <ReactSVG src={logo} style={{fill:props.color}} alt="Logo" ></ReactSVG>
        </div>
    )
}