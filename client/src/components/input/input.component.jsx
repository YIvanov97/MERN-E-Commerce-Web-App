const Input = ({label, labelStyle, inputStyle, ...inputAttributes}) => {
    const isLabelAnimated = inputAttributes.value.length && labelStyle === 'animated';
    
    return(
        <div className="input-container">
            <input className={`input input__${inputStyle}`} name={label} {...inputAttributes} />
            <label className={`label label__${labelStyle} ${isLabelAnimated ? 'animate' : ''}`} htmlFor={label}>{label}</label>
        </div>
    )
}

export default Input;