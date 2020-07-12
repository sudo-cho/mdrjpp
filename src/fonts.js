import { createGlobalStyle } from "styled-components";

import MSSerifwoff from "./fonts/MS-Sans-Serif.woff";
import MSSerifwoff2 from "./fonts/MS-Sans-Serif.woff2";
import MSSerifttf from "./fonts/MS-Sans-Serif.ttf";

export default createGlobalStyle`
@font-face {
        font-family: 'MSSerif';
        src: local('MSSerif'),
        url(${MSSerifwoff2}) format('woff2');
        url(${MSSerifwoff}) format('woff');
        url(${MSSerifttf}) format('truetype');
    }
`;
