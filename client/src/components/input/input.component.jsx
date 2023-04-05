import { AnimatedInputContainer, AnimatedInputLabel } from './input.styles';

const Input = ({label, labelStyle, inputStyle, ...inputAttributes}) => {
    const isLabelAnimated = inputAttributes.value.length && labelStyle === 'animated';
    
    return(
        <AnimatedInputContainer>
            <input className={`input input__${inputStyle}`} name={label} {...inputAttributes} />
            <AnimatedInputLabel animate={isLabelAnimated ? true : false} className={`label__${labelStyle}`} htmlFor={label}>{label}</AnimatedInputLabel>
        </AnimatedInputContainer>
    )
}

export default Input;