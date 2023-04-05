import { createGlobalStyle } from "styled-components";
import SanFranciscoSemibold from '../assets/fonts/SF-Semibold.otf'
import SanFranciscoRegular from '../assets/fonts/SF-Regular.otf'
import SanFranciscoLight from '../assets/fonts/SF-Light.otf'

export const FontFamily = createGlobalStyle`
    @font-face {
        font-family: 'SF-Semibold';
        src: url(${SanFranciscoSemibold}) format('opentype');
    }

    @font-face {
        font-family: 'SF-Regular';
        src: url(${SanFranciscoRegular}) format('opentype');
    }

    @font-face {
        font-family: 'SF-Light';
        src: url(${SanFranciscoLight}) format('opentype');
    }
`