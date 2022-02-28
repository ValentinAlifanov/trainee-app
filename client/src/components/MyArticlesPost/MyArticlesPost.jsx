import React from 'react';
import {Link} from "react-router-dom";

import Vector from '../../assets/img/Vector.svg';
import noUserAvatar from '../../assets/img/NoUserAvatar.png'
import Photo from '../../assets/img/Photo1.png'

import './MyAticlesPost.css';

export default function MyArticlesPost ({ post, user }) {
        return (
            <div className='MyArticlesPost-box'>
                <div>
                    <Link to={`/readPost/${post._id}`}>
                        <img className='MyArticlesPost-Photo' src={Photo} alt="MyArticlesPost"/>
                    </Link>
                </div>
                <article className='MyArticlesPost-read-box'>
                    <div className='MyArticlesPost-tag-box'>
                        <span className='MyArticlesPost-tag' dangerouslySetInnerHTML={{__html: `${post.category}`}}/>
                    </div>
                    <div className='MyArticlesPost-topic-box'>
                        <Link className='MyArticlesPost-Link' to={`/readPost/${post._id}`}>
                            <span className='MyArticlesPost-topic' dangerouslySetInnerHTML={{__html: `${post.topic}`}}/>
                        </Link>
                    </div>
                    <div className='MyArticlesPost-text-box'>
                        <p className='MyArticlesPost-text' dangerouslySetInnerHTML={{__html: `${post.text}`}}/>
                    </div>
                    <div className='MyArticlesPost-info-box'>
                        <div className='MyArticlesPost-info-box__user-avatar-box'>
                            <img className='MyArticlesPost-info-box__user-avatar' src={user.userAvatar || noUserAvatar}
                                 alt="user-avatar-MyArticlesPost"/>
                        </div>
                        <div className='MyArticlesPost-info-box__user-name-box'>
                            <span className='MyArticlesPost-info-box__user-name'>{post.userName}</span>
                        </div>
                        <div className='MyArticlesPost-info-box__dataPost-box'>
                            <span className='MyArticlesPost-info-box__dataPost'> Jun 13 · 5 min read </span>
                        </div>
                        <img className='MyArticlesPost-info-box__vector' src={Vector} alt="Vector-MyArticlesPost"/>
                        <span className='MyArticlesPost-info-box__views'> {post.count} </span>
                    </div>
                </article>
            </div>
        )
    };