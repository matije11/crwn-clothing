import React from 'react'
import SignUp from '../../components/sign-up/SignUp';
import SignIn from '../../components/sign-in/SignIn';
import "./Authentication.scss";

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication