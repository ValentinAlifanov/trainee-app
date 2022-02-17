import React from 'react';
import {Link, Navigate, useParams} from "react-router-dom";

import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import FooterLogIn from "../FooterLogIn/FooterLogIn";

import Photo from '../../assets/img/Photo1.png'
import Vector from '../../assets/img/Vector.svg';
import noUserAvatar from '../../assets/img/NoUserAvatar.png'

import './ReadPost.css';


export default function ReadPost() {
    const postIDReading = useParams()
    let posts = JSON.parse(localStorage.getItem('posts'))
    let post = posts.find(post => post.id === postIDReading.postID)
    let users = JSON.parse(localStorage.getItem('users'))
    let user = users.find(user => user.userID === post.userID)
    if (localStorage.getItem('check') === 'true') {
        return (
            <>
                <HeaderLogIn/>
                <main className="readPost-main-box">
                    <Link to={`/mainLogIn`} className='readPost__Link-allArticles'><p>All articles</p></Link>
                    <div className='readPost__post-box'>
                        <div className='readPost-tag-box'>
                            <span className='readPost-tag'
                                  dangerouslySetInnerHTML={{__html: `${post.category}`}}/>
                        </div>
                        <div className='readPost-topic-box'>
                            <span className='readPost-topic' dangerouslySetInnerHTML={{__html: `${post.topic}`}}/>
                        </div>
                        <div>
                            <img className='readPost-Photo' src={Photo} alt="readPost"/>
                        </div>
                        <div className='readPost-text-box'>
                            <p className='readPost-post-text' dangerouslySetInnerHTML={{__html: `${post.text}`}}/>
                        </div>
                        <div className='readPost-info-box'>
                            <div className='readPost-info-box__user-avatar-box'>
                                <img className='readPost-info-box__user-avatar' src={user.userAvatar || noUserAvatar}
                                     alt="user-avatar-MyArticlesPost"/>
                            </div>
                            <div className='readPost-info-box__user-name-box'>
                                <span
                                    className='readPost-info-box__user-name'>{`${user.firstName} ${user.lastName}`}</span>
                            </div>
                            <div className='readPost-info-box__dataPost-box'>
                                <span className='readPost-info-box__dataPost'> Jun 13 · 5 min read </span>
                            </div>
                            <img className='readPost-info-box__vector' src={Vector} alt="Vector-MyArticlesPost"/>
                            <span className='readPost-info-box__views'> 1690 </span>
                        </div>
                    </div>
                </main>
                <FooterLogIn/>
            </>)
        }
    else{
        return (
            <Navigate to="/" />);
    }
};

