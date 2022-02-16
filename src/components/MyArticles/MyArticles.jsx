import React from 'react';

import MyArticlesPost from '../MyArticlesPost/MyArticlesPost'
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import FooterLogIn from "../FooterLogIn/FooterLogIn";

import {Navigate} from "react-router-dom";

import './MyArticles.css';
import noUserAvatar from "../../assets/img/NoUserAvatar.png";

export default function MyArticles () {

    if (localStorage.getItem('check') === 'true') {
        const postsDB = JSON.parse(localStorage.getItem('posts'))
        const userLogIn = JSON.parse(localStorage.getItem('userLogIn'))
        const userPosts = postsDB.filter(post => post.userID === userLogIn.userID);
        return (
            <>
                <HeaderLogIn />
                <main className='my-articles-main-box'>
                    <div className='my-articles__photo-box'>
                        <div className='my-articles__user-avatar-box'>
                            <img src={userLogIn.userAvatar || noUserAvatar} className='my-articles-user-avatar' alt='user-avatar'/>
                        </div>
                        <p className='my-articles__name'>{userLogIn.firstName} {userLogIn.lastName}</p>
                        <p className='my-articles__description'>{userLogIn.description}</p>
                    </div>
                    <div>
                        {userPosts.map(post => <MyArticlesPost key={post.id} post={post}/>)}
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