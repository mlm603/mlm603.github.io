import React from 'react';
import { NavItems_div } from './NavItems_SCs';
import NavItem from './NavItem/NavItem';

const navItems = () => (
	<NavItems_div>
		<NavItem link="/" itemType="title">Meghan Maloy</NavItem>
		<NavItem link="/">About</NavItem>
		<NavItem link="/">Portfolio</NavItem>
		<NavItem link="/">Contact</NavItem>
	</NavItems_div>
);

export default navItems;