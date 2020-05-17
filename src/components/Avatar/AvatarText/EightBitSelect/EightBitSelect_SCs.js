import styled from 'styled-components';


const OptionsDiv = styled.div`
    margin: 20px 0 0 0;

    @keyframes FadeIn { 
      0% {
        opacity: 0;
        transform: scale(.1);
      }
    }

    & label {
      animation: FadeIn 0.01s linear;
      animation-delay: ${props => props.animationDelay};
      animation-fill-mode: both;
      padding-top: 2px;
    }

    & a {
      margin-top: 5px;
      display: block;
      color: white;
      text-decoration: none;
    }
`

export { OptionsDiv };
