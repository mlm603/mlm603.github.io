import React from 'react';

import { Toolbar_div, Nav_div, Menu_div } from './Toolbar_SCs';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
	<Toolbar_div>
		<Menu_div onClick={props.menuClick}>
			<div/>
			<div/>
			<div/>
		</Menu_div>
		<Nav_div>
			<NavItems/>
		</Nav_div>
	</Toolbar_div>
);

export default toolbar;