import { createContext, useEffect, useState } from "react"

export const UserContext = createContext({
    user: {},
    setUser: () => {}
})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    const value = { user, setUser }

    // useEffect(() => {
    //     const loggedInUser = async () => {
    //         const fetchedUser = await fetch('https://localhost:4000/v1/auth/user')
    //         const res = await fetchedUser.json()
    //         setUser(res.user)
    //     }
        
    //     return loggedInUser;
    // }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}