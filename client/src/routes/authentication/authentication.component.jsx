import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import './authentication.styles.scss'

const Authentication = () => {
    return(
        <div className="authentication authentication-page page__container">
            <div className="authentication__inner-container">
                <SignIn title={'Login'}/>
                <SignUp title={'Register'}/>
            </div>
        </div>
    )
}

export default Authentication;