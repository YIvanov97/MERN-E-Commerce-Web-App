import Button, { BUTTON_COLORS, BUTTON_TYPES } from '../button/button.component'
import { RoundSmButton } from '../button/button.styles'
import { BannerStyledCard, ShopStyledCard } from './card.styles'

export const BannerCard = ({image, type, title, text}) => {
    return (
        <BannerStyledCard>
            <div className="card__image-container">
                <img src={image}/>
            </div>
            <div className="card__text-container">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </BannerStyledCard>
    )
}

export const ShopCard = ({image, type, title, text}) => {
    return (
        <ShopStyledCard>
            <div className="card__image-container">
                <img src={image}/>
            </div>
            <div className="card__text-container">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className='card__buttons-container'>
                <Button label={'Buy'} type={'button'} buttonStyle={BUTTON_TYPES.roundSm} buttonColors={BUTTON_COLORS.shop}/>
                <Button label={'About'} type={'button'} buttonStyle={BUTTON_TYPES.roundSm} buttonColors={BUTTON_COLORS.shop}/>
            </div>
        </ShopStyledCard>
    )
}