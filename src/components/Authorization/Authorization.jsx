import React from 'react';
import './Authorization.css';

export default function Authorization (props) {

    return (
        <div className={'authorization-box'}>
            <button className={`button1-${props.place}`}>Log in</button>
            <button className={`button2-${props.place}`}>Sign in</button>
        </div>
    )
}