import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import './home-page.styles.scss';
import Banner from "../../components/banner/banner.component";
import BannerFirstSvg from '../../assets/images/welcome-banner-svg.svg'
import BannerSecondSvg from '../../assets/images/classic-banner-revert-svg.svg'
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
    const {user, setUser} = useContext(UserContext)

    // useEffect(() => {
    //     async function getUser() {
    //         const data = await fetch('https://localhost:4000/v1/auth/user')
    //         const res = await data.json()
    //         setUser(res.user)
    //     }
        
    //     getUser()
    // }, [])

    return(
        <div className="page__container">
            <Banner type={'classic'} title={'Header'} text={'header banner text'} image={BannerFirstSvg}/>
            <Banner type={'cards'}/>
            <Banner id="revert-banner" type={'classic revert'} title={'Header'} text={'revert banner text'} image={BannerSecondSvg}/>
            <Footer />
        </div>
    )
}

export default HomePage