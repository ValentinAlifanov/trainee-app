import React, {useState,useEffect} from 'react';
import axios from "axios";

import Photo1 from '../../assets/img/Photo1.png';
import Vector from '../../assets/img/Vector.svg';
import noUserAvatar from '../../assets/img/NoUserAvatar.png'

import './FacePost.css';


export default function FacePost () {
    const [popularPost, setPopularPost] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {axios.get(`http://localhost:5000/api/article/postPopular`)
        .then((response) => {
            setPopularPost(response.data)
            axios.get(`http://localhost:5000/api/readUsers/read/${response.data.user}`)
                .then((response) => {
                    console.log(response)
                    setUser(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])


    return (
                <div className='FacePost-box'>
                    <div>
                        <img className='FacePost-Photo' src={Photo1} alt="FacePost-pic"/>
                    </div>
                    <article className='FacePost-read-box'>
                        <div className='FacePost-tag-box'>
                            <section className='FacePost-tag'>
                                #Typography
                            </section>
                        </div>
                        <div className='FacePost-topic-box'>
                            <p className='FacePost-topic'> {popularPost.topic} </p>
                        </div>
                        <div className='FacePost-text-box'>
                            <p className='FacePost-text'> {popularPost.text} </p>
                        </div>
                        <div className='FacePost-info-box'>
                            <div className='FacePost-info-box__user-avatar-box'>
                                <img className='FacePost-info-box__user-avatar' src={ user.userAvatar || noUserAvatar } alt="user-avatar-FacePost"/>
                            </div>
                            <div className='FacePost-info-box__user-name-box'>
                                <p className='FacePost-info-box__user-name'> Janay Wright </p>
                            </div>
                            <div className='FacePost-info-box__dataPost-box'>
                                <p className='FacePost-info-box__dataPost'> Jun 13 · 5 min read </p>
                            </div>
                            <img className='FacePost-info-box__vector'  src={Vector} alt="Vector-FacePost"/>
                            <p className='FacePost-info-box__views'> {popularPost.count} </p>
                        </div>
                    </article>
                </div>
    )
}