import styled from 'styled-components';
import { white } from '../../styles/colors';

export const BannerStyledCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    border-radius: 20px;
    background-color: ${white};
    box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.6);
    
    .card__image-container {
        height: 40%;
        width: 100%;
        padding: 20px 0;
        
        img {
            width: 100%;
            height: 100%;
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
        }
    }
    
    .card__text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const ShopStyledCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 200px;
    border-radius: 20px;
    padding: 20px;
    background-color: ${white};
    box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.6);
    
    .card__image-container {
        height: 40%;
        width: 100%;
        
        img {
            width: 100%;
            height: 100%;
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
        }
    }
    
    .card__text-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        h4 {
            margin: 10px 0;
        }

        p {
            margin: 0 0 10px 0;
        }
    }

    .card__buttons-container {
        display: flex;
        width: 100%;
        justify-content: space-around;
        flex-direction: 'row';
        align-items: center;
        margin: auto 0 0 0;
    }
`