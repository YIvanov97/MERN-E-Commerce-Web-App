import { MediaQueries } from '../../styles/mixins';
import styled from 'styled-components'
import { textBlack, white } from '../../styles/colors';

export const ClassicBanner = styled.div`
    display: flex;
    padding: 50px 0;
    max-height: 300px;
    margin: ${props => props.margin || '0px'};
    background-color: ${white};
    width: 100%;
    box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.6);

    .classic__image-container {
            display: flex;
            align-items: center;
            justify-content: center;
            
            img {
                width: 100%;
                height: 100%;
            }
        }

    .classic__text-container {
        display: flex;
        align-items: center;
        justify-content: center;

        &--inner {
            display: flex;
            flex-direction: column;

            h3{
                font-family: 'SF-Semibold';
                font-size: 1.6rem;
                color: ${textBlack};
            }
        }
    }

    @media ${MediaQueries.Desktop} {
        flex-direction: row;

        &.revert {
            flex-direction: row-reverse;
        }
    }

    @media ${MediaQueries.Tablet} {
        flex-direction: column;

        &.revert {
            flex-direction: column-reverse;
        }
    }
`

export const CardsBanner = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: transparent;
    height: 400px;
    margin: ${props => props.margin || '0px'};
    width: 100%;

    @media ${MediaQueries.Desktop} {
        flex-direction: row;
    }

    @media  ${MediaQueries.Tablet} {
        flex-direction: column;
    }
`