import styled, { createGlobalStyle, css } from 'styled-components';
import { purpleDark, textBlack, textWhite, white } from '../../styles/colors';

export const DefaultButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    font-family: 'SF-Semibold';
    font-size: 1rem;

    &--hidden {
        display: none;
    }
`

export const RoundMdButton = styled(DefaultButton)`
    ${props => {
        switch(props.buttonColors) {
            case 'auth':
            return css`
                color: ${textWhite};
                border: 2px solid ${white};
            `
        }
    }};
    border-radius: 20px;
    padding: 10px 30px;

    &--hidden {
        display: none;
    }
`

export const RoundSmButton = styled(DefaultButton)`
    ${props => {
        switch(props.buttonColors) {
            case 'shop':
            return css`
                color: ${textBlack};
                border: 2px solid ${purpleDark};
            `
        }
    }};
    border-radius: 20px;
    padding: 5px 10px;

    &--hidden {
        display: none;
    }
`