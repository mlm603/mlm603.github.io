import styled from 'styled-components';
import github_logo from '../../../assets/images/github_logo.png';

const Icon_div = styled.div`
   width: 40px;
   height: 40px;
   background-image: ${props => `url(${props.img_path})`};
   background-size: cover;
   display: inline-block;
   margin: 10px;
 `;

const NPM_Icon_div = styled.div`
   width: 200px;
   height: 40px;
   background-color: rgb(51,51,51);
   color: white;
   display: inline-block;
   margin: 10px;
 `;

 export { Icon_div, NPM_Icon_div };