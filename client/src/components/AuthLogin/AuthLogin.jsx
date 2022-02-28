import React, {useContext, useState} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

import {UserAuthContext} from "../../App";

import './AuthLogin.css';


const SignupForm = () => {
    let [AuthMessageError, setAuthMessageError] = useState('')
    const navigate = useNavigate();
    const { setUserAuth } = useContext(UserAuthContext);


    const authFormik = useFormik({
        initialValues: {
            authEmail: '',
            authPassword: '',
        },
        validationSchema: Yup.object({
            authEmail: Yup.string()
                .email('Invalid email address')
                .required('Please enter your username or email address.'),
            authPassword: Yup.string()
                .max(20, 'Must be 15 characters or less')
                .min(6, 'Must be at least 6 characters.')
                .required('Please enter a password.'),
        }),

        onSubmit: values => {
            axios.post('http://localhost:5000/api/auth/login', {
                email:  values.authEmail,
                password: values.authPassword
            })
                .then(function (response) {
                    localStorage.setItem('userLogIn', JSON.stringify(response.data))
                    setUserAuth(true)
                    navigate('/');
                })
                .catch(function () {
                    setAuthMessageError('Invalid password')
                });
        },
    });
    return (
        <form className='auth-form' onSubmit={authFormik.handleSubmit}>
            <div className='auth-form__label-box'>
                <label className='auth-form__label' htmlFor="authEmail">Email Address</label>
                <input className={`auth-form__input ${authFormik.touched.authEmail && authFormik.errors.authEmail ? ('invalid') : ('')}`}
                    id="authEmail"
                    type="email"
                    {...authFormik.getFieldProps('authEmail')} />
                {authFormik.touched.authEmail && authFormik.errors.authEmail ? (
                    <div className='auth-form__error'>{authFormik.errors.authEmail}</div>
                ) : <div className='auth-form__no-error'> </div>}
            </div>

            <div className='auth-form__label-box'>
                <label className='auth-form__label' htmlFor="authPassword">Password</label>
                <input
                    className={`auth-form__input ${authFormik.touched.authPassword && authFormik.errors.authPassword ? ('invalid') : ('')}`}
                    id="authPassword"
                    type="password"
                    {...authFormik.getFieldProps('authPassword')} />
                {authFormik.touched.authPassword && authFormik.errors.authPassword ? (
                    <div className='auth-form__error'>{authFormik.errors.authPassword}</div>
                ) : <div className='auth-form__no-error'> </div>}
            </div>

            <div className='auth-form__error_message'>
                <p>{AuthMessageError}</p>
            </div>
            <button className='auth-form__button' name='auth-button-submit' type="submit">Log In</button>

        </form>
    );
};

export default function AuthLogin () {
        return (
            <>
                <main className='auth-main-box'>
                    <div className='auth-topic-box'>
                        <section className='auth-topic'>Log in to your account</section>
                    </div>
                    <SignupForm/>
                    <div className='auth-signature-box'>
                        <span className='auth-signature-text'>Don’t have a Times account?
                            <Link to={`/create`} className='auth-signature-link'>Create one</Link></span>
                    </div>
                </main>
            </>
        )
    }
