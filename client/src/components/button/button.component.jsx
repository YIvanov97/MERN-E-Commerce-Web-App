import './button.styles';
import { DefaultButton, RoundMdButton, RoundSmButton } from './button.styles';

export const BUTTON_TYPES = {
    default: 'default',
    roundMd: 'round-md',
    roundSm: 'round-sm'
}

export const BUTTON_COLORS = {
    auth: 'auth',
    shop: 'shop'
}

const getButtonType = (buttonStyle = BUTTON_TYPES.default) => {
    return ({
        [BUTTON_TYPES.default]: DefaultButton,
        [BUTTON_TYPES.roundMd]: RoundMdButton,
        [BUTTON_TYPES.roundSm]: RoundSmButton
    }[buttonStyle])
}

const Button = ({label, type, buttonStyle, buttonColors, ...buttonAttributes}) => {
    const CustomButton = getButtonType(buttonStyle)
    return(
        <CustomButton className={`button__${buttonStyle}`} type={type} buttonColors={buttonColors} {...buttonAttributes}>{label}</CustomButton>
    )
}

export default Button;