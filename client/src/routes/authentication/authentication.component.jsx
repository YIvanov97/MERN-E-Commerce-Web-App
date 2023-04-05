import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { AuthenticationContainer } from './authentication.styles'

const Authentication = () => {
    return(
        <AuthenticationContainer>
            <div className="authentication__inner-container">
                <SignIn title={'Login'}/>
                <SignUp title={'Register'}/>
            </div>
        </AuthenticationContainer>
    )
}

export default Authentication;