import React, {useEffect, useState} from 'react';

import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import FooterLogIn from "../FooterLogIn/FooterLogIn";
import {Navigate} from "react-router-dom";
import {useFormik} from 'formik';
import noUserAvatar from '../../assets/img/NoUserAvatar.png'


import './Profile.css';

export default function Profile () {
    const [userPush, setUserPush] = useState(JSON.parse(localStorage.getItem('userLogIn')))
    const formik = useFormik({
        initialValues: {
            firstName: `${userPush.firstName}`,
            lastName: `${userPush.lastName}`,
            description: `${userPush.description}`,
        },
        onSubmit: values => {
            localStorage.setItem('userLogIn', JSON.stringify({...userPush, ...values }))
            },
    });

    const delPhoto = () => {
        userPush.userAvatar = ''
        localStorage.setItem('userLogIn',JSON.stringify(userPush))
        setUserPush(prevState => ({
             ...prevState,
             userAvatar: ''
        }))
    }

    useEffect(() => {
    },[userPush])

    if (localStorage.getItem('check') === 'true') {
        return (
            <>
                <HeaderLogIn />
                <div className='profile-box'>
                    <article className='profile-title'>Profile</article>
                    <form onSubmit={formik.handleSubmit} className='profile-form'>
                        <div className='profile-main__photo-box'>
                            <div className='profile__user-avatar-box'>
                                <img src={userPush.userAvatar || noUserAvatar}  className='profile-user-avatar' alt='user-avatar'/>
                            </div>
                            <button className='profile__change-photo-btn' type="button">Change photo</button>
                            <button className='profile__delete-photo-btn' type="button" onClick={delPhoto}>Delete photo</button>
                        </div>
                        <div className='profile-info-box'>
                            <div className='profile-info-box_line1'>
                                <div>
                                    <p className='profile-info-box_line1_title'>First name</p>
                                    <input className='profile-info-box_line1_input'
                                           id="firstNameProfile"
                                           type="text"
                                           {...formik.getFieldProps('firstName')}/>
                                </div>
                                <div className='profile-info-box__lastname-box'>
                                    <p className='profile-info-box_line1_title'>Last Name</p>
                                    <input className='profile-info-box_line1_input'
                                           id="lastNameProfile"
                                           type="text"
                                           {...formik.getFieldProps('lastName')}/>
                                </div>
                            </div>
                            <div>
                                <p className='profile-info-box_description'>Description</p>
                                <textarea className='profile-info-box_description-input' value={formik.initialValues.description}
                                          id="descriptionProfile"
                                          type="text"
                                          {...formik.getFieldProps('description')}> </textarea>
                            </div>
                            <button type="submit" className='profile-info-box__btn'>Save Changes</button>
                        </div>
                    </form>
                </div>
                <FooterLogIn />
            </>
        )
    }
    else {
        return (
            <Navigate to="/" />);
    }
};