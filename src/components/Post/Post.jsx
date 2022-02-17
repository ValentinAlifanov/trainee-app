import React from 'react';
import {Link} from "react-router-dom";

import Vector from '../../assets/img/Vector.svg';
import noUserAvatar from '../../assets/img/NoUserAvatar.png'
import Photo from '../../assets/img/Photo1.png'

import './Post.css';


export default function Post ({ post }) {
    let users = JSON.parse(localStorage.getItem('users'))
    let user = users.find(user => user.userID === post.userID)
    return (
        <div className='Post-box'>
            <div>
                <Link to={`/readPost/${post.id}`}>
                    <img className='Post-Photo' src={Photo} alt="MyArticlesPost"/>
                </Link>
            </div>
            <article className='Post-read-box'>
                <div className='Post-tag-box'>
                    <span className='Post-tag' dangerouslySetInnerHTML={{__html: `${post.category}`}}/>
                </div>
                <div className='Post-topic-box'>
                    <Link className='Post-Link' to={`/readPost/${post.id}`}>
                        <span className='Post-topic' dangerouslySetInnerHTML={{__html: `${post.topic}`}}/>
                    </Link>
                </div>
                <div className='Post-text-box'>
                    <p className='Post-text' dangerouslySetInnerHTML={{__html: `${post.text}`}}/>
                </div>
                <div className='Post-info-box'>
                    <div className='Post-info-box__user-avatar-box'>
                        <img className='Post-info-box__user-avatar' src={user.userAvatar || noUserAvatar} alt="user-avatar-MyArticlesPost"/>
                    </div>
                    <div className='Post-info-box__user-name-box'>
                        <span className='Post-info-box__user-name'>{`${user.firstName} ${user.lastName}`}</span>
                    </div>
                    <div className='Post-info-box__dataPost-box'>
                        <span className='Post-info-box__dataPost'> Jun 13 · 5 min read </span>
                    </div>
                    <img className='Post-info-box__vector' src={Vector} alt="Vector-MyArticlesPost"/>
                    <span className='Post-info-box__views'> 1690 </span>
                </div>
            </article>
        </div>
    )
}