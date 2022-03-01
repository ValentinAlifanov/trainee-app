import React, {useEffect, useState} from 'react';
import axios from "axios";

import FacePost from '../FacePost/FacePost'
import Post from '../Post/Post'

import './Main.css';

export default function Main () {
    const [articles, setArticles] = useState([])
    const [popularPost, setPopularPost] = useState({})

    const allArticles = articles.filter((article) => article._id !== popularPost._id)

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
        <main className='main-box'>
            <div className='main-container container'>
                <FacePost popularPost={popularPost} setPopularPost={setPopularPost}/>
                <div className='main-popular-articles-box'>
                    <p className='main-popular-articles'> Popular articles </p>
                </div>
                {allArticles.length > 0 && allArticles.map(post => <Post key={post._id} post={post}/>)}
            </div>
        </main>
    )
};