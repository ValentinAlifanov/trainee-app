import React from 'react';

import './Post.css';
import Vector from '../../assets/img/Vector.svg';


export default function Post ({ item }) {
    return (
        <div className='Post-box'>
            <div>
                <img className='Post-Photo' src={item.PostPhoto} alt="Post"/>
            </div>
            <article className='Post-read-box'>
                <div className='Post-tag-box'>
                    <span className='Post-tag'>
                        #Typography
                    </span>
                </div>
                <div className='Post-topic-box'>
                    <span className='Post-topic'> Humane Typography in the Digital Age </span>
                </div>
                <div className='Post-text-box'>
                    <p className='Post-text'> Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What type should we use and why? Does the type match the message and what?</p>
                </div>
                <div className='Post-info-box'>
                    <div className='Post-info-box__user-avatar-box'>
                        <img className='Post-info-box__user-avatar' src={item.userAvatar} alt="user-avatar-Post"/>
                    </div>
                    <div className='Post-info-box__user-name-box'>
                        <span className='Post-info-box__user-name'> Janay Wright </span>
                    </div>
                    <div className='Post-info-box__dataPost-box'>
                        <span className='Post-info-box__dataPost'> Jun 13 · 5 min read </span>
                    </div>
                    <img className='Post-info-box__vector' src={Vector} alt="Vector-Post"/>
                    <span className='Post-info-box__views'> 1690 </span>
                </div>
            </article>
        </div>
    )
}