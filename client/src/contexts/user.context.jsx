import { createContext, useState } from "react"


//This is the actual value, you want to access
export const UserContext = createContext({
    user: {},
    setUser: () => {}
})

//This is the actual component
export const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    const value = { user, setUser }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}