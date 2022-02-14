import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useNavigate} from "react-router-dom";

import './Create.css';


const SignupForm = ({users, setUsers}) => {
    const [errorUseEmail, setErrorUseEmail] = useState(false)
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(3, 'Must be at least 3 characters.')
                .required('Please enter a first name.'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .min(3, 'Must be at least 3 characters.')
                .required('Please enter a last name.'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Please enter your username or email address.'),
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .min(6, 'Must be at least 6 characters.')
                .required('Please enter a password.'),
        }),

        onSubmit: values => {
            const isUserExist = users.some((user) => user.email === values.email)

            if(isUserExist) {
                setErrorUseEmail(true)
            } else {
                localStorage.setItem('users', JSON.stringify([...users, values]))
                setUsers([...users, values])
                setErrorUseEmail(false)
                localStorage.setItem('check', true);
                navigate('/mainLogIn')
            }
        },
    });
    return (
        <form className='create-form' onSubmit={formik.handleSubmit}>
            <div className='create-form__label-box'>
                <label className="create-form__label" htmlFor="firstName">First name</label>
                <input
                    className={`create-form__input ${formik.touched.firstName && formik.errors.firstName ? ('invalid') : ('')}`}
                    id="firstName"
                    type="text"
                    {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='create-form__error'>{formik.errors.firstName}</div>
                    ) :
                    (<div className='create-form__no-error'></div>)}
            </div>

            <div className='create-form__label-box'>
                <label className='create-form__label' htmlFor="lastName">Password</label>
                <input
                    className={`create-form__input ${formik.touched.lastName && formik.errors.lastName ? ('invalid') : ('')}`}
                    id="lastName"
                    type="text"
                    {...formik.getFieldProps('lastName')} />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className='create-form__error'>{formik.errors.lastName}</div>
                ) : <div className='create-form__no-error'></div>}
            </div>
            <div className='create-form__label-box'>
                <label className='create-form__label' htmlFor="email">Email Address</label>
                <input
                    className={`create-form__input ${formik.touched.email && formik.errors.email ? ('invalid') : ('')}`}
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                    <div className='create-form__error'>{formik.errors.email}</div>
                ) : <div className='create-form__no-error'></div>}
            </div>

            <div className='create-form__label-box'>
                <label className='create-form__label' htmlFor="password">Password</label>
                <input
                    className={`create-form__input ${formik.touched.password && formik.errors.password ? ('invalid') : ('')}`}
                    id="password"
                    type="password"
                    {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? (
                    <div className='create-form__error'>{formik.errors.password}</div>
                ) : <div className='create-form__no-error'></div>}
            </div>
            <div className='create-form__error_message'>
                {errorUseEmail && <p>This email is being used</p>}
            </div>
            <button className='create-form__button' name='button-submit' type="submit">Create Account</button>

        </form>
    );
};

export default function Create({users, setUsers}) {
    return (
        <>
            <Header />
            <main className='create-main-box'>
                <div className='create-topic-box'>
                    <section className='create-topic'>Create your free account</section>
                </div>
                <SignupForm users={users} setUsers={setUsers}/>
            </main>
            <Footer />
        </>
    )
}

