import React from 'react';

import classes from './divider.scss';

const Divider = (props) => {
	return (
		<div className={classes.divider}><span className={[classes.devider, classes.devider[props.color]].join(' ')}></span></div>
	)
}

export default Divider;
