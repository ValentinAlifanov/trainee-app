import React, {useEffect, useState,useContext} from 'react';
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";

import {UserAuthContext} from "../../App";

import Photo from '../../assets/img/Photo1.png'
import Vector from '../../assets/img/Vector.svg';
import noUserAvatar from '../../assets/img/NoUserAvatar.png'
import './ReadPost.css';


export default function ReadPost() {
    const { userAuth } = useContext(UserAuthContext);
    const postIDReading = useParams()
    const [article, setArticle] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/article/post/${postIDReading.postID}`)
            .then((response) => {
                setArticle(response.data)
                plusOneVisit(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])


    function plusOneVisit(article) {
        const count = article.count + 1
        axios.patch(`http://localhost:5000/api/article/update/${postIDReading.postID}`,
            {count: count})
            .catch(function (error) {
                console.log(error)
            });
    }

    if (!userAuth) {
        return (
            <Navigate to="/" />);
    }
    return (
            <main className="readPost-main-box">
                <div className="readPost-main-container container">
                    <Link to={`/`} className='readPost__Link-allArticles'><p>All articles</p></Link>
                    <div className='readPost__post-box'>
                        <div className='readPost-tag-box'>
                                <span className='readPost-tag'
                                      dangerouslySetInnerHTML={{__html: `${article.category}`}}/>
                        </div>
                        <div className='readPost-topic-box'>
                            <span className='readPost-topic' dangerouslySetInnerHTML={{__html: `${article.topic}`}}/>
                        </div>
                        <div>
                            <img className='readPost-Photo' src={Photo} alt="readPost"/>
                        </div>
                        <div className='readPost-text-box'>
                            <p className='readPost-post-text' dangerouslySetInnerHTML={{__html: `${article.text}`}}/>
                        </div>
                        <div className='readPost-info-box'>
                            <div className='readPost-info-box__user-avatar-box'>
                                <img className='readPost-info-box__user-avatar' src={noUserAvatar}
                                     alt="user-avatar-MyArticlesPost"/>
                            </div>
                            <div className='readPost-info-box__user-name-box'>
                                    <span
                                        className='readPost-info-box__user-name'>{`${article.userName}`}</span>
                            </div>
                            <div className='readPost-info-box__dataPost-box'>
                                <span className='readPost-info-box__dataPost'> Jun 13 · 5 min read </span>
                            </div>
                            <img className='readPost-info-box__vector' src={Vector} alt="Vector-MyArticlesPost"/>
                            <span className='readPost-info-box__views'> {article.count + 1} </span>
                        </div>
                    </div>
                </div>
            </main>
    )
};

