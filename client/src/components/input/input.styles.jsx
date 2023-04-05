import styled from 'styled-components';
import { textGray, textWhite, white } from '../../styles/colors';
import { labelAnimation } from '../../styles/mixins';

export const AnimatedInputLabel = styled.label`
    font-size: 1rem;
    position: absolute;
    z-index: 1;
    top: 40%;
    color: ${textGray};
    left: 10px;
    transition: 300ms ease all;
    font-family: 'SF-Regular';

    ${({animate}) => animate && labelAnimation}
`

export const AnimatedInputContainer = styled.div`
  position: relative;
  width: 100%;

  .input {
    width: 100%;
    height: 30px;
    position: relative;
    font-size: 1rem;

    &:-webkit-autofill { 
      -webkit-background-clip: text;
    }

    &:-webkit-autofill{
      -webkit-text-fill-color: ${textWhite};
    }
    
    &__underline {
      border: 0;
      margin: 20px 0;
      border-bottom: 1px solid ${white};
      z-index: 2;
      background-color: transparent;
      font-family: 'SF-Regular';
      color: ${textWhite};
    }

    &:focus {
      outline: none;
    }

    &:focus ~ ${AnimatedInputLabel} {
      ${labelAnimation};
    }
  }
`