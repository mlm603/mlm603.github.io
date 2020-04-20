import styled from 'styled-components';


const OptionsDiv = styled.div`
    margin: 20px 0 0 20px;

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
    }
`

export { OptionsDiv };
