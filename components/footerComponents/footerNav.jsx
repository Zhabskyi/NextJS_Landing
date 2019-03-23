import React from 'react';

import classes from './footerNav.scss';
import NavItems from '../nav/nav-items/navItems';

const footerNav = () => {
	return (
		<div className={classes.container}>
			<NavItems className={classes.link} symbol={'/'}/>
		</div>
	)
}

export default footerNav
