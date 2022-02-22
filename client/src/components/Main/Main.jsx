import React, {useEffect, useState} from 'react';
import axios from "axios";

import FacePost from '../FacePost/FacePost'
import Post from '../Post/Post'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './Main.css';

export default function Main () {
    const [articles, setArticles] = useState([])

    useEffect(() => {
     axios.get('http://localhost:5000/api/article')
        .then((response) => {
            setArticles(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <>
            <Header />
            <main className='main-box'>
                <FacePost />
                <p className='main-popular-articles'> Popular articles </p>
                {articles.length > 0 && articles.map(post => <Post key={post._id} post={post}/>)}
            </main>
            <Footer />
        </>
    )
};