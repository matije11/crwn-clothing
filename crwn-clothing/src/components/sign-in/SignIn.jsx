import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import Button from '../button/Button';
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase';
import "./SignIn.scss";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newFormData)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(formData.email, formData.password);
            resetForm();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("Incorrect password");
                    break
                case 'auth/user-not-found':
                    alert("No user associated with this email");
                    break;
                default:
                    console.log('user sing in encountered an error ' + error)
            }
        }
    }

    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
        })
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    name='email'
                    autoComplete="off"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <FormInput
                    label="Password"
                    type="password"
                    name='password'
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sing In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn