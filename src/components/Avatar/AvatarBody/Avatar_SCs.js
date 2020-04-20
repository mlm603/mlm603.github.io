import styled from 'styled-components';


const AvatarDiv = styled.div`
    display: inline-block; 
    height: ${props => props.height};
    width: ${props => props.width};
    margin: 50px;
`

const AvatarHead = styled.div`
    position: relative;
    background: #FFF2BA;
    height: 20%;
    width: 60%;
    top: 0;

    // hair
    &:before {
        content: "";
        position: absolute;
        background: #a13d2d;
        height: 200%;
        width: 167%;
        top: -33%;
        left: -33%;
        z-index: -1;
    }
`

const AvatarEye = styled.div`
    content: "";
    position: absolute;
    background: #000;
    height: 20%;
    width: 8%;
    top: 20%;
    left: 20%;
    z-index: 100;

    &:after {
        content: "";
        position: absolute;
        background: #000;
        height: 100%;
        width: 100%;
        left: 500%;
        z-index: 100;
    }
`

const AvatarMouth = styled.div`
    content: "";
    position: absolute;
    background: #000;
    height: 10%;
    width: 35%;
    top: 67%;
    left: 25%;
    z-index: 100;
    animation: talking 0.5s ${props => props.movements};

    @keyframes talking {
      from {height: 10%;}
      to {height: 20%;}
    }
`

const AvatarShirt = styled.div`
    position: relative;
    background: #b19cd9;
    height: 33%;
    width: 60%;
    top: 6.5%;

    // neck
    &:before {
        content: "";
        position: absolute;
        background: #FFF2BA;
        height: 20%;
        width: 33%;
        top: -20%;
        left: 33%;
    }

    // sleeves
    &:after {
        content: "";
        position: absolute;
        background: #b19cd9;
        height: 40%;
        width: 133%;
        left: -16.5%;
        top: 20%;
    }
`

const AvatarHands = styled.div`
    position: relative;
    background: #FFF2BA;
    height: 6.5%;
    width: 10%;
    top: -6.5%;
    left: -10%;

    &:after {
        content: "";
        position: absolute;
        background: #FFF2BA;
        height: 100%;
        width: 100%;
        left: 700%;
    }
`

const AvatarPants = styled.div`
    position: relative;
    background: #028BBA;
    height: 6.6%;
    width: 60%;

    &:before {
        content: "";
        position: absolute;
        background: #028BBA;
        height: 300%;
        width: 50%;
        top: 100%;
    }

    &:after {
        content: "";
        position: absolute;
        background: #028BBA;
        height: 300%;
        width: 50%;
        top: 100%;
        left: 46%;
        border-left: 2px solid black;
    }
`

const AvatarShoes = styled.div`
    position: relative;
    background: #fff;
    height: 6.6%;
    width: 60%;
    top: 20%;
`

export { AvatarDiv, AvatarHead, AvatarEye, AvatarMouth, AvatarShirt, AvatarHands, AvatarPants, AvatarShoes };
