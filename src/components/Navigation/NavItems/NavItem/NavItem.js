import React from 'react';
import { NavItem_div } from './NavItem_SCs';

const navItem = (props) => (
	<NavItem_div itemType={props.itemType}>
		<a href={props.link}>
			{props.children}
		</a>
	</NavItem_div>
);

export default navItem;