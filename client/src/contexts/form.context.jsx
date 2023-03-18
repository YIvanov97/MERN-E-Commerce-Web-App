import { createContext, useState } from "react"


//This is the actual value, you want to access
export const FormContext = createContext({
    currentForm: false,
    setCurrentForm: () => false
})

//This is the actual component
export const FormProvider = ({children}) => {
    const [currentForm, setCurrentForm] = useState(false)
    const value = { currentForm, setCurrentForm }

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}