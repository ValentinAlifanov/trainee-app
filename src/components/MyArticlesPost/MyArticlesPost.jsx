import React from 'react';
import Photo from '../../assets/img/Photo1.png'

import Vector from '../../assets/img/Vector.svg';
import noUserAvatar from '../../assets/img/NoUserAvatar.png'

import './MyAticlesPost.css';


export default function MyArticlesPost ({ post }) {
    let users = JSON.parse(localStorage.getItem('users'))
    let user = users.find(user => user.userID == post.userID)
    return (
        <div className='MyArticlesPost-box'>
            <div>
                <img className='MyArticlesPost-Photo' src={Photo} alt="MyArticlesPost"/>
            </div>
            <article className='MyArticlesPost-read-box'>
                <div className='MyArticlesPost-tag-box'>
                    <span className='MyArticlesPost-tag'>
                        {post.category}
                    </span>
                </div>
                <div className='MyArticlesPost-topic-box'>
                    <span className='MyArticlesPost-topic'> {post.topic} </span>
                </div>
                <div className='MyArticlesPost-text-box'>
                    <p className='MyArticlesPost-text'> {post.text} </p>
                </div>
                <div className='MyArticlesPost-info-box'>
                    <div className='MyArticlesPost-info-box__user-avatar-box'>
                        <img className='MyArticlesPost-info-box__user-avatar' src={user.userAvatar || noUserAvatar} alt="user-avatar-MyArticlesPost"/>
                    </div>
                    <div className='MyArticlesPost-info-box__user-name-box'>
                        <span className='MyArticlesPost-info-box__user-name'>{`${user.firstName} ${user.lastName}`}</span>
                    </div>
                    <div className='MyArticlesPost-info-box__dataPost-box'>
                        <span className='MyArticlesPost-info-box__dataPost'> Jun 13 · 5 min read </span>
                    </div>
                    <img className='MyArticlesPost-info-box__vector' src={Vector} alt="Vector-MyArticlesPost"/>
                    <span className='MyArticlesPost-info-box__views'> 1690 </span>
                </div>
            </article>
        </div>
    )
}