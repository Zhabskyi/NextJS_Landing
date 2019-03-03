import React from 'react';
import classes from './menuToggle.scss';

const menuToggle = (props) => {
	return (
	<div className={classes.menuToggle} onClick={props.onClick}>
		<div></div>
		<div></div>
		<div></div>
	</div>)
};

export default menuToggle;