import React from 'react';
import './Main.css';
import FacePost from '../FacePost/FacePost'
import Post from '../Post/Post'
import {DB} from "../../DB";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Main () {

    return (
        <>
            <Header />
            <main className='main-box'>
                <FacePost />
                <p className='main-popular-articles'> Popular articles </p>
                {DB.map(item => <Post key={item.idPost} item={item}/>)}
            </main>
            <Footer />
        </>
    )
};