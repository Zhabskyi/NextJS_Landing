import React from 'react';

import classes from './slideBubblesControls.scss';
import classnames from 'classnames';
import data from '../../../config/commentsBlockConfig';

const slideBubblesControls = (props) => {
	return (
		<div className={classes.bubbles}>
			{data.properties.map( el => (
				<span 
					className={classnames(classes.bubble, {[classes.bubble_active] : props.active == el.index})}
					onClick={ e => props.bubbleClick(el.index, e)}>
				</span>
			))}
		</div>
	)
}

export default slideBubblesControls;
