import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { UserContext } from "../../contexts/user.context"
import { StyledNavLink } from "../../styles/global"
import { NavigationContainer } from './navigation.styles'

const Navigation = () => {
    const { user, setUser } = useContext(UserContext)

    const handleSignOut = async () => {
        setUser({})
        return await fetch('https://localhost:4000/v1/auth/logout')
    }
    
    return (
        <Fragment>
            <NavigationContainer className="container--full">
                <div className="navigation__logo-container">

                </div>
                <div className="navigation__links-container">
                    <StyledNavLink as={Link} to='/'>Home</StyledNavLink>
                    <StyledNavLink as={Link} className="link link__nav" to='/shop'>Shop</StyledNavLink>
                    <StyledNavLink as={Link} className="link link__nav" to='/about'>About</StyledNavLink>
                    <StyledNavLink as={Link} className="link link__nav" to='/contacts'>Contacts</StyledNavLink>
                    {user.email ? (
                        <Fragment>
                            <StyledNavLink as={Link} className="link link__nav" to='/profile'>Profile</StyledNavLink>
                            <StyledNavLink as={'a'} className="link link__nav" onClick={handleSignOut}>Logout</StyledNavLink>
                        </Fragment>
                    ) : (
                        <StyledNavLink as={Link} className="link link__nav" to='/auth'>Login</StyledNavLink>
                    )}
                </div>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;