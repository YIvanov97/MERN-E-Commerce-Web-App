import { useContext, useState } from "react";
import { FormContext } from "../../contexts/form.context";
import { useNavigate } from "react-router-dom";
import Input from "../input/input.component";
import { SignInCnontainer } from "./sign-in.styles";
import { UserContext } from "../../contexts/user.context";
import Button, {BUTTON_COLORS, BUTTON_TYPES} from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = ({ title }) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const [hideButton, setHideButon] = useState('')
    const navigate = useNavigate()

    const { setCurrentForm } = useContext(FormContext)
    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
            const response = await fetch('https://localhost:4000/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const data = await response.json()
    
            if (data.success) {
                setUser(data.user)
                navigate('/')
            } else {
                throw new Error('Login failed')
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        
        setFormFields({...formFields, [name]: value})
    }

    const showRegistration = () => {
        setHideButon('button--hidden')
        setCurrentForm(true)
    }

    return(
        <SignInCnontainer className="signin__container">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit} className="form container--full">
                <Input 
                    onChange={handleChange} 
                    label={'Email'} 
                    labelStyle={'animated'} 
                    inputStyle={'underline'} 
                    type="email" name="email" 
                    required 
                    value={email}
                />
                <Input 
                    onChange={handleChange} 
                    label={'Password'} 
                    labelStyle={'animated'} 
                    inputStyle={'underline'} 
                    type="password" name="password" 
                    required 
                    value={password}
                />
                <div className="buttons-container">
                    <Button 
                        label={'Login'} 
                        type={'submit'} 
                        buttonStyle={`${BUTTON_TYPES.roundMd}`}
                        buttonColors={BUTTON_COLORS.auth}
                    />
                    <Button 
                        label={'Don\'t have an account ?'} 
                        type={'button'} 
                        buttonStyle={`${BUTTON_TYPES.roundMd}`} 
                        buttonColors={BUTTON_COLORS.auth}
                        onClick={showRegistration}
                    />
                </div>
            </form>
        </SignInCnontainer>
    )
}

export default SignIn;