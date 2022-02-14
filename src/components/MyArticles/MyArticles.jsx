import React from 'react';

import Post from '../Post/Post'
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import FooterLogIn from "../FooterLogIn/FooterLogIn";
import {DB} from "../../DB";

import './MyArticles.css';

export default function MyArticles () {

    return (
        <>
            <HeaderLogIn />
            <main className='main-box'>
                <p className='main-popular-articles'> Popular articles </p>
                {DB.map(item => <Post key={item.idPost} item={item}/>)}
            </main>
            <FooterLogIn />
        </>
    )
};