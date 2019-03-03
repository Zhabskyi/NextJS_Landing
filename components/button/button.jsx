import React from 'react';

import classes from './button.scss';

const button = (props) => (
	<button
	 	disabled={props.disabled}
		className={[classes.btn, classes[props.btnType]].join(' ')}
		onClick={props.onClick}>{props.title}</button>
);

export default button;
