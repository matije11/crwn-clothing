import SignUp from '../../components/sign-up/SignUp';
import SignIn from '../../components/sign-in/SignIn';
import { AuthenticationContainer } from './Authentication.styles';

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignIn />
            <SignUp />
        </AuthenticationContainer>
    )
}

export default Authentication