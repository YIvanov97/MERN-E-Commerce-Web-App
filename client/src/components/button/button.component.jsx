import './button.styles.scss';

const Button = ({label, type, buttonStyle, ...buttonAttributes}) => {
    return(
        <button className={`button button__${buttonStyle}`} type={type} {...buttonAttributes}>{label}</button>
    )
}

export default Button;