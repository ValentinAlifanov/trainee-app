import React,{useState, useEffect} from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom";

import FacePost from '../FacePost/FacePost'
import Post from '../Post/Post'
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import FooterLogIn from "../FooterLogIn/FooterLogIn";

import './MainLogIn.css';


export default function MainLogIn () {
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

    if (localStorage.getItem('userLogIn')) {
        return (
            <>
                <HeaderLogIn />
                <main className='main-box'>
                    <FacePost />
                    <p className='main-popular-articles'> Popular articles </p>
                    {articles.length > 0 && articles.map(post => <Post key={post._id} post={post}/>)}
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