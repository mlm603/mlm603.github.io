import styled from 'styled-components';


const SpeechDiv = styled.div`
    display: inline-block;
    vertical-align: top;
    margin-top: 20px;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 1em;
    color: white;
    text-align: left;
    width: ${props => props.width};

    @keyframes FadeIn { 
      0% {
        opacity: 0;
        transform: scale(.1);
      }
    }

    & span {
      animation: FadeIn 0.01s linear;
      animation-fill-mode: both;
    }
`

export { SpeechDiv };
