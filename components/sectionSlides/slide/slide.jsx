import React from 'react';

import classes from './slide.scss';
import classnames from 'classnames';
import Quotes from '../../quotes/quotes';

const slide = (props) => {
	return (
		<div className={classnames(classes.container, {[classes.active] : props.active == props.index})}
					id={`slide_${props.index}`}>
			<div className={classes.quotes}>
				<Quotes color={props.active == props.index ? 'white' : 'green'} size='small' />
			</div>
			<p>{props.comment}</p>
			<p><span className={classes.name}>{props.name} / </span><span className={classes.company}>{props.company}</span></p>
		</div>
	)
}

export default slide;

