import React from 'react';

import classes from './chartsSlide.scss';
import classnames from 'classnames';




const chartSlides = ({ isActive, index, imgSrc }) => {
	const classNames = classnames(classes.container, { [classes.active]: isActive });
	return (
		<div className={classNames} id={`slide_${index}`}>
				<img src={imgSrc}></img>
		</div>
	)
}

export default chartSlides;