import { createGlobalStyle } from 'styled-components';
import img from './assets/images/background.png';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: avenir;
	    text-align: center;
	    background-image: url(${img});
	}
 `;

export { GlobalStyle };