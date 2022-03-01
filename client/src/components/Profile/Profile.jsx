import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import {useFormik} from 'formik';

import noUserAvatar from '../../assets/img/NoUserAvatar.png'

import './Profile.css';

export default function Profile () {
    const userLogIn = JSON.parse(localStorage.getItem('userLogIn') || false)
    const [user, setUser] = useState([])
    let [photo, setPhoto] = useState(user.userAvatar)
    const navigate = useNavigate()
    useEffect(() => {
        if(userLogIn) {
            axios.get(`http://localhost:5000/api/readUsers/read/${userLogIn.userId}`)
                .then((response) => {
                    setUser(response.data)
                    setPhoto(response.data.userAvatar)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },[])

    const convertBase64 = (file) =>
        new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })

    async function handleImageChange(e) {
         e.preventDefault();
         let reader = new FileReader();
         let file = e.target.files[0];
         reader.onloadend = () => {
            setPhoto(reader.result)}
        reader.readAsDataURL(file)
        const base64 = await convertBase64(file)
        formik.setFieldValue("userAvatar", base64);
    }

    const formik = useFormik({
        initialValues: {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            description: user.description || '',
            userAvatar: user.userAvatar || ''
        },
        enableReinitialize: true,

        onSubmit: values => {
            const config = {
                headers: {
                    Authorization: userLogIn.token
                }
            }

            axios.patch(`http://localhost:5000/api/readUsers/update/${userLogIn.userId}`, values, config)
                .then(function () {
                    navigate('/myArticles')
                })
                .catch(function (error) {
                    console.log(error)
                });
            },
    });

    function delPhoto() {
        setPhoto('')
        formik.setFieldValue('userAvatar', '')
    }

    if (userLogIn) {
        return (
            <div className='profile-box container'>
                <article className='profile-title'>Profile</article>
                <form onSubmit={formik.handleSubmit} className='profile-form'>
                    <div className='profile-main__photo-box'>
                        <div className='profile__user-avatar-box'>
                            <img src={photo || noUserAvatar}  className='profile-user-avatar' alt='user-avatar'/>
                        </div>
                        <div className='profile-input-file-box'>
                            <input type="file"
                                   name="userAvatar"
                                   id="file"
                                   className="profile-input-file-input"
                                    onChange={(e) => handleImageChange(e)}/>
                            <label htmlFor="file" className='profile-input-file-label'>Chose a file</label>
                        </div>
                        <button className='profile__delete-photo-btn'
                                type="button"
                                onClick={delPhoto}>Delete photo</button>
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
                            <textarea className='profile-info-box_description-input'
                                      value={formik.initialValues.description}
                                      id="descriptionProfile"
                                      {...formik.getFieldProps('description')}> </textarea>
                        </div>
                        <button type="submit" className='profile-info-box__btn'>Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }
    else {
        return (
            <Navigate to="/" />);
    }
};