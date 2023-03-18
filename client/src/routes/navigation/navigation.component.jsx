import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation container--full">
                <div className="navigation__logo-container">

                </div>
                <div className="navigation__links-container">
                    <Link className="link link__nav" to='/'>Home</Link>
                    <Link className="link link__nav" to='/shop'>Shop</Link>
                    <Link className="link link__nav" to='/about'>About</Link>
                    <Link className="link link__nav" to='/contacts'>Contacts</Link>
                    <Link className="link link__nav" to='/profile'>Profile</Link>
                    <Link className="link link__nav" to='/auth'>Login</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;