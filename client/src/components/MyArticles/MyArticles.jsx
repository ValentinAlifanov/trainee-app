import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom";

import MyArticlesPost from '../MyArticlesPost/MyArticlesPost'
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import FooterLogIn from "../FooterLogIn/FooterLogIn";
import noUserAvatar from "../../assets/img/NoUserAvatar.png";

import './MyArticles.css';


export default function MyArticles () {
    const userLogIn = JSON.parse(localStorage.getItem('userLogIn'))
    const [articles, setArticles] = useState([])
    const [user, setUser] = useState({})
    const config = {
        headers: {
            Authorization: userLogIn.token
        }
    }

    useEffect(() => {axios.get(`http://localhost:5000/api/readUsers/read/${userLogIn.userId}`)
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {axios.get(`http://localhost:5000/api/article/${userLogIn.userId}`, config)
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
                <main className='my-articles-main-box'>
                    <div className='my-articles__photo-box'>
                        <div className='my-articles__user-avatar-box'>
                            <img src={user.userAvatar || noUserAvatar} className='my-articles-user-avatar' alt='user-avatar'/>
                        </div>
                        <p className='my-articles__name'>{user.firstName} {user.lastName}</p>
                        <p className='my-articles__description'>{user.description}</p>
                    </div>
                    <div>
                        {articles.map(post => <MyArticlesPost key={post._id} post={post} user={user}/>)}
                    </div>
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