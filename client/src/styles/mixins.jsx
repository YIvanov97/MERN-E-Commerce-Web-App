import { css } from 'styled-components';
import { textWhite } from './colors';

//Animations

export const labelAnimation = css`
    top: 0;
    left: 0;
    color: ${textWhite};
    font-size: 0.8rem;
    font-family: 'SF-Semibold';
`


//Media Queries

export const MediaQueries = {
    Desktop: `(min-width: 1024px)`,
    Tablet: `(max-width: 1024px)`,
    Phone: `(max-width: 600px)`
}