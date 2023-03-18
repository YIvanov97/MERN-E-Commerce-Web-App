import { useContext, useState } from "react";
import { FormContext } from "../../contexts/form.context";
import Button from "../button/button.component";
import Input from "../input/input.component";
import './sign-up.styles.scss'

const defaultFormFields = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
}

const SignUp = ({title}) => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { firstName, lastName, userName, email, password } = formFields;

    const { currentForm, setCurrentForm } = useContext(FormContext)

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
            const response = await fetch('https://localhost:4000/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    username: userName,
                    email: email,
                    password: password
                })
            })
    
            if (response.ok) {
                console.log('Registration successful')
            } else {
                throw new Error('Registration failed')
            }
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div className={`signup__container page__container--half ${currentForm ? 'signup--show' : ''}`}>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit} className="form container--full">
                <Input onChange={handleChange} label={'First Name'} labelStyle={'animated'} inputStyle={'underline'} type="text" name="firstName" required value={firstName}/>
                <Input onChange={handleChange} label={'Last Name'} labelStyle={'animated'} inputStyle={'underline'} type="text" name="lastName" required value={lastName}/>
                <Input onChange={handleChange} label={'Username'} labelStyle={'animated'} inputStyle={'underline'} type="text" name="userName" required value={userName}/>
                <Input onChange={handleChange} label={'Email'} labelStyle={'animated'} inputStyle={'underline'} type="email" name="email" required value={email}/>
                <Input onChange={handleChange} label={'Password'} labelStyle={'animated'} inputStyle={'underline'} type="password" name="password" required value={password}/>
                <Button label={'Register'} type={'submit'} buttonStyle={'round--md'}/>
            </form>
        </div>
    )
}

export default SignUp;