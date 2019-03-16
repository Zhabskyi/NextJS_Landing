import React from 'react'

import classes from './quotes.scss';
import classnames from 'classnames';

const quotes = (props) => {
	return (
		<>
			<div className={classnames(classes[props.color], classes[props.size], props.className)}></div>
			<div className={classnames(classes[props.color], classes[props.size], props.className)}></div>
		</>
	)
}

export default quotes;
