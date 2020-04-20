import React from 'react';

import { BackgroundDiv } from './EightBitBackground_SCs';

const eightBitBackground = (props) => (
	<BackgroundDiv>
		{props.children}
	</BackgroundDiv>
);

export default eightBitBackground;