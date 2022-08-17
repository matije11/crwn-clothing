import { useState, FormEvent, ChangeEvent } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/FormInput'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { SignInContainer, ButtonsContainer } from './SignIn.styles';
import { googleSignInStart, emailSignInStart } from '../../store/user/userAction'

const SignIn = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newFormData)
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            dispatch(emailSignInStart(formData.email, formData.password))
            resetForm();
        }
        catch (error) {
            switch ((error as AuthError).code) {
                case AuthErrorCodes.INVALID_PASSWORD:
                    alert("Incorrect password");
                    break
                case AuthErrorCodes.USER_DELETED:
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
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={(e) => handleSubmit}>
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
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sing In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn