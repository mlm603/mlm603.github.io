import styled from 'styled-components';

const FiltersDiv = styled.div`
    @media (min-width: 800px){
        display: none;
    }
    @media (max-width: 800px){
        display: inline-block;
    }
 `;

const ChartDiv = styled.div`
    margin-left:1%;
    width:48%;
    display:inline-block;
    background-color: #f7f7f7;

    .selected_n{
      fill: red;
    }

    display: ${props => props.status === "hidden" ? "none" : null};

    @media (max-width: 800px){
        width: 100%;
    }
 `;

const CityFlagDiv = styled.div`
    background-size:contain;
    display: inline-block;
    text-align: center;
    border-color: black;
    border-width: 2px;
    border-style: solid;
 `;

const NeighborhoodLabel = styled.p`
    font-size:25px;
    height:40px;
    width:100%;
    text-align: center;
 `;

const CityTitle = styled.p`
    font-size:40px;
    color:white;
    background-color: black;
    padding: 10px 5% 10px 5%;
    text-align: center;
 `;

const InputDiv = styled.input`
    position: absolute;
    left: -9999px;

    &:checked + label>div {
      border: 1px solid #fff;
      box-shadow: 0 0 3px 3px #090;
    }

    & + label>div{
      margin-left:2.5%;
      margin-right:2.5%;
      width:160px;
      height:80px;
    }
 `;


export { FiltersDiv, ChartDiv, CityFlagDiv, NeighborhoodLabel, CityTitle, InputDiv };


        // display: ${props => props.status === "hidden" ? "none !important" : null};