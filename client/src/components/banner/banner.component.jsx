import { BannerCard } from '../card/card.component';
import { ClassicBanner, CardsBanner } from './banner.styles';
import { HalfContainer } from '../../styles/global';

export const BannerClassic = ({id, type, ...bannerProps}) => {
    return(
        <ClassicBanner id={id} className={`${type}`} margin={bannerProps.margin}>
            <HalfContainer className="classic__image-container">
                <img src={bannerProps.image} alt="classic-banner-svg"/>
            </HalfContainer>
            <HalfContainer className="classic__text-container">
                <div className="classic__text-container--inner">
                    <h3>{bannerProps.title}</h3>
                    <p>{bannerProps.text}</p>
                </div>
            </HalfContainer>
        </ClassicBanner>
    )
}

export const BannerCards = ({id, type, ...cardsProps}) => {
    const Cards = () => {
        let cardsArr = []
        for (let i = 0; i < cardsProps.cardsLength; i++) {
            cardsArr.push(<BannerCard image={cardsProps.images[i]} type={cardsProps.cardsType} title={cardsProps.cardsTitles[i]} text={cardsProps.cardsText[i]}/>)
        }
        return cardsArr;
    }

    return (
        <CardsBanner id={id} className={`${type}`} margin={cardsProps.margin}>
            <Cards />
        </CardsBanner>
    )
}