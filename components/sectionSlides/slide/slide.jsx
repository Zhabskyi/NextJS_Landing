import React from 'react';

import classes from './slide.scss';
import classnames from 'classnames';
import Quotes from '../../quotes/quotes';

//Code after refactoring
const slide = ({ isActive, index, name, company, comment }) => {
	const classNames = classnames(classes.container, { [classes.active]: isActive });
	return (
		<div className={classNames}
			id={`slide_${index}`}>
			<div className={classes.quotes}>
				<Quotes
					color={ isActive ? 'white' : 'green'}
					size='small' />
			</div>
			<p>{comment}</p>
			<p>
				<span className={classes.name}>{name} / </span>
				<span className={classes.company}>{company}</span>
			</p>
		</div>
	)
}

export default slide;


// USE TO BE LIKE THIS

// const slide = (props) => {
// 	return (
// 		<div className={classnames(classes.container, {[classes.active] : props.active == props.index})}
// 					id={`slide_${props.index}`}>
// 			<div className={classes.quotes}>
// 				<Quotes color={props.active == props.index ? 'white' : 'green'} size='small' />
// 			</div>
// 			<p>{props.comment}</p>
// 			<p><span className={classes.name}>{props.name} / </span><span className={classes.company}>{props.company}</span></p>
// 		</div>
// 	)
// }

// export default slide;

