import styled from 'styled-components';
import { textWhite } from '../../styles/colors';
import { MediaQueries } from '../../styles/mixins';

export const AuthenticationContainer = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    .authentication__inner-container {
        display: flex;
        justify-content: space-around;
        max-width: 900px;
        width: fit-content;
        padding: 30px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.1);
        margin: 0 auto;
        
        .signup__container, .signin__container {
            flex-direction: column;
            align-items: center;
            width: 300px;
            margin: 0 40px;
            background-color: transparent;
            color: ${textWhite};
            
            h1 {
                font-family: 'SF-Semibold';
            }
            
            .form {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }

    @media ${MediaQueries.Desktop} {
        .authentication__inner-container {
            flex-direction: row;
        }
    }
    
    @media ${MediaQueries.Tablet} {
        .authentication__inner-container {
            flex-direction: column;
        }
    }
    
    @media ${MediaQueries.Phone} {
        .authentication__inner-container {
            align-items: center;
            width: 100%;

            .signup__container, .signin__container {
                width: 100%;
            }
        }
    }
`