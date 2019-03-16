import React from 'react';

import classes from './sectionImage.scss';
import classNames from 'classnames';

const SectionImage = (props) => {
	return (
		<div className={classNames(classes.section__image, props.className)}>
				{props.children}
		</div>
	)
}

export default SectionImage;
