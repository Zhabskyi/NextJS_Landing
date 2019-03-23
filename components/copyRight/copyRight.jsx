import React from 'react';

import classes from './copyRight.scss';

const copyRight = (props) => {
	return (
		<div className={classes.container}>
				&#9400; {new Date().getFullYear()} {props.children}
		</div>
	)
}

export default copyRight;
