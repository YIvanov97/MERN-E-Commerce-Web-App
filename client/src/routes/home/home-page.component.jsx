import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import './home-page.styles.jsx';
import BannerFirstSvg from '../../assets/images/welcome-banner-svg.svg'
import BannerSecondSvg from '../../assets/images/classic-banner-revert-svg.svg'
import Footer from "../../components/footer/footer.component";
import { BannerCards, BannerClassic } from "../../components/banner/banner.component";
import FirstCardSvg from '../../assets/images/home-card-svg1.svg'
import SecondCardSvg from '../../assets/images/home-card-svg2.svg'
import ThirdCardSvg from '../../assets/images/home-card-svg3.svg'

const HomePage = () => {
    const {user} = useContext(UserContext)
   
    return(
        <div className="page__container">
            <BannerClassic type={'classic'} title={'Header'} text={'header banner text'} image={BannerFirstSvg} margin='0 0 300px 0'/>
            <BannerCards 
                type={'cards'} 
                cardsLength={3}
                cardsType={'banner__card'}
                images={[FirstCardSvg, SecondCardSvg, ThirdCardSvg]} 
                cardsTitles={['Header', 'Header', 'Header']} 
                cardsText={['some card text', 'some card text', 'some card text']}
                margin='0 0 300px 0'
            />
            <BannerClassic id="revert" type={'revert'} title={'Header'} text={'revert banner text'} image={BannerSecondSvg} margin='300px 0 0 0'/>
            <Footer />
        </div>
    )
}

export default HomePage