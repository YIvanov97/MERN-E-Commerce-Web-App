import './card.styles.scss'

const Card = ({image, type, title, text}) => {
    return (
        <div className={type}>
            <div className="banner__card__image-container">
                <img src={image}/>
            </div>
            <div className="banner__card__text-container">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card;