import styled from 'styled-components';
import './colors';
import { purpleDark, textBlack } from './colors';

//Containers

export const FullContainer = styled.div`
    width: 100%
`

export const HalfContainer = styled.div`
    width: 50%
`

//Links
export const StyledNavLink = styled.a`
    padding: 10px 20px;
    color: ${textBlack};
    font-size: 1rem;
    margin: 0 10px;
    text-decoration: none;
    font-family: 'SF-Regular';

    &:hover {
        border-bottom: 2px solid ${purpleDark};
    }
`