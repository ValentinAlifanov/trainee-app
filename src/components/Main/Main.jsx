import React from 'react';

import FacePost from '../FacePost/FacePost'
import Post from '../Post/Post'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './Main.css';

export default function Main () {
    const postsDB = JSON.parse(localStorage.getItem('posts')) || []
    return (
        <>
            <Header />
            <main className='main-box'>
                <FacePost />
                <p className='main-popular-articles'> Popular articles </p>
                {postsDB.map(post => <Post key={post.id} post={post}/>)}
            </main>
            <Footer />
        </>
    )
};