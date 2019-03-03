import React from 'react';

import Logo from '../logo/logo';
import NavItems from '../nav/nav-items/navItems';
import classes from './sideDrawer.scss';
import Backdrop from '../backdrop/backdrop';
import Button from '../button/button';

const sideDrawer = (props) => {
	let attachedClasses = [classes.sideDrawer, classes.close];
	if (props.open) {
		attachedClasses =[classes.sideDrawer, classes.open];
	}
	return(
		<React.Fragment>
			<Backdrop show={props.open} onClick={props.closed}/>
			<div className={attachedClasses.join(' ')}>
				<div className={classes.wrapper}>
					<Button 
						btnType='close'
						onClick={props.onClick}>
							<span></span>
					</Button>
						<div className={classes.logo}>
							<Logo />
						</div>
						<nav>
							<NavItems/>
						</nav>
				</div>
			</div>
			</React.Fragment>
	);
};

export default sideDrawer;