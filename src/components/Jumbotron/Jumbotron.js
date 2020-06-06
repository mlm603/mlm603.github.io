import React from 'react';
import { Jumbotron_div, TitleText } from  './Jumbotron_SCs';

const jumbotron = (props) => {
	return (
		<Jumbotron_div>
			{
				props.section_title ?
				(
					<TitleText>
						{props.section_title}
					</TitleText>
				)
				: null
			}
			{props.children}
		</Jumbotron_div>
	);
};

export default jumbotron;