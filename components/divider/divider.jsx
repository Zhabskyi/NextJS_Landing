import React from 'react';

import classes from './divider.scss';
import classnames from 'classnames';

const Divider = (props) => {
	
	return (
		<div className={classes.divider}><span className={classnames(classes.devider, classes[props.color])}></span></div>
	)
}

export default Divider;

//<div className={classes.divider}><span className={[classes.devider, classes.devider__[props.color]].join(' ')}></span></div>

