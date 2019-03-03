import React from 'react';

import classes from './backdrop.scss';

const backdrop = (props) => {
	return	props.show ? <div className={classes.backdrop} onClick={props.onClick}></div> :  null;
};

export default backdrop;