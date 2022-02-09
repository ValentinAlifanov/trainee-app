import React from 'react';
import './Main.css';
import FacePost from '../FacePost/FacePost'
import Post from '../Post/Post'

export default function Main () {
    return (
        <main className='main-box'>
            <FacePost />
            <p className='main-popular-articles'> Popular articles </p>
            <Post />
        </main>
    )
}