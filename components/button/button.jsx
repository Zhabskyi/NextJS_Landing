import React from 'react';

import classes from './button.scss';
import classnames from 'classnames';

const button = (props) => (
	<button
	 	disabled={props.disabled}
		className={classnames(classes.btn, classes[props.btnType], props.className)}
		onClick={props.onClick}>{props.title}</button>
);

export default button;

