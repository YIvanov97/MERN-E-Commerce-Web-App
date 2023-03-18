import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";

const HomePage = () => {
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        async function getUser() {
            const data = await fetch('https://localhost:4000/v1/auth/user')
            const res = await data.json()
            setUser(res.user)
        }
        
        getUser()
    }, [])

    return(
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default HomePage