import { Fragment } from 'react';
import Card from '../card/card.component';
import './banner.styles.scss';
import FirstCardSvg from '../../assets/images/home-card-svg1.svg'
import SecondCardSvg from '../../assets/images/home-card-svg2.svg'
import ThirdCardSvg from '../../assets/images/home-card-svg3.svg'

const Banner = ({id, type, title, text, image}) => {
    const BannerType = () => {
        if (type.includes('classic')) {
            return (
                <Fragment>
                    <div className="banner__classic__image-container container--half">
                        <img src={image} alt="classic-banner-svg"/>
                    </div>
                    <div className="banner__classic__text-container container--half">
                        <div className="banner__classic__text-container--inner">
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                    </div>
                </Fragment>
            )
        } else if (type == 'cards') {
            return (
                <Fragment>
                    <Card image={FirstCardSvg} type={'banner__card'} title={'Header'} text={'some text for card'}/>
                    <Card image={SecondCardSvg} type={'banner__card'} title={'Header'} text={'some text for card'}/>
                    <Card image={ThirdCardSvg} type={'banner__card'} title={'Header'} text={'some text for card'}/>
                </Fragment>
            )
        }
    }
    return(
        <div id={id} className={`banner banner__${type} container--full`}>
            <BannerType />
        </div>
    )
}

export default Banner;