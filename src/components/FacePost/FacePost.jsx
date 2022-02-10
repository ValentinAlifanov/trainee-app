import React from 'react';
import './FacePost.css';
import Photo1 from '../../assets/img/Photo1.png';
import userAvatar1 from '../../assets/img/user1.png';
import Vector from '../../assets/img/Vector.svg';

export default function FacePost () {
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
                            <p className='FacePost-topic'> Humane Typography in the Digital Age </p>
                        </div>
                        <div className='FacePost-text-box'>
                            <p className='FacePost-text'> Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what?</p>
                        </div>
                        <div className='FacePost-info-box'>
                            <div className='FacePost-info-box__user-avatar-box'>
                                <img className='FacePost-info-box__user-avatar' src={userAvatar1} alt="user-avatar-FacePost"/>
                            </div>
                            <div className='FacePost-info-box__user-name-box'>
                                <p className='FacePost-info-box__user-name'> Janay Wright </p>
                            </div>
                            <div className='FacePost-info-box__dataPost-box'>
                                <p className='FacePost-info-box__dataPost'> Jun 13 · 5 min read </p>
                            </div>
                            <img className='FacePost-info-box__vector'  src={Vector} alt="Vector-FacePost"/>
                            <p className='FacePost-info-box__views'> 1690 </p>
                        </div>
                    </article>
                </div>
    )
}