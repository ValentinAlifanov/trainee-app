import React from 'react';
import './MainLogIn.css';
import FacePost from '../FacePost/FacePost'
import Post from '../Post/Post'
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import FooterLogIn from "../FooterLogIn/FooterLogIn";
import {Navigate} from "react-router-dom";

export default function MainLogIn () {

    if (localStorage.getItem('check') === 'true') {
        const postsDB = JSON.parse(localStorage.getItem('posts'))
        return (
            <>
                <HeaderLogIn />
                <main className='main-box'>
                    <FacePost />
                    <p className='main-popular-articles'> Popular articles </p>
                    {postsDB.map(post => <Post key={post.id} post={post}/>)}
                </main>
                <FooterLogIn />
            </>
        )
    }
    else {
       return (
           <Navigate to="/" />);
    }
};