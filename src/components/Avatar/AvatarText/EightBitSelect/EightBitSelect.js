import React from 'react';

import { OptionsDiv } from './EightBitSelect_SCs';

const eightBitSelect = (props) => {
	return (
		<OptionsDiv animationDelay={props.animationDelay}>
			{props.children}
	  	</OptionsDiv>
	)
};

export default eightBitSelect;