import React from 'react';

import { Backdrop_div } from './Backdrop_SCs';

const Backdrop = (props) => (
	props.show 
	? <Backdrop_div onClick={props.clicked} /> 
	: null
);

export default Backdrop;