import { useState, FormEvent, ChangeEvent } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch } from 'react-redux';
// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import FormInput from '../form-input/FormInput'
import Button from '../button/Button';
import { SignUpContainer } from './SignUp.styles';
import { signUpStart } from '../../store/user/userAction'

const SignUp = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newFormData)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match")
            return;
        }

        try {
            dispatch(signUpStart(formData.email, formData.password, formData.displayName))
            // const { user } = await createAuthUserWithEmailAndPassword(formData.email, formData.password);
            // await createUserDocumentFromAuth(user, { displayName: formData.displayName })
            resetForm();
        }
        catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert("Cannot create user, email already in use.")
            } else {
                console.log('user creation encountered an error ' + error)
            }
        }

    }

    const resetForm = () => {
        setFormData({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={(e) => handleSubmit}>

                <FormInput
                    label="Display Name"
                    type="text"
                    name='displayName'
                    autoComplete="off"
                    required
                    value={formData.displayName}
                    onChange={handleChange}
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    name='confirmPassword'
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUp