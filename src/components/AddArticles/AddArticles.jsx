import React from 'react';
import './AddArticles.css';
import FacePost from '../FacePost/FacePost'
import Post from '../Post/Post'
import {DB} from "../../DB";
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import FooterLogIn from "../FooterLogIn/FooterLogIn";

export default function AddArticles () {

    return (
        <>
            <HeaderLogIn />
            <main className='main-box'>
                <FacePost />
                <p className='main-popular-articles'> Popular articles </p>
                {DB.map(item => <Post key={item.idPost} item={item}/>)}
            </main>
            <FooterLogIn />
        </>
    )
};