import React from 'react';

import classes from './sectionImage.scss';

const SectionImage = (props) => {
	return (
		<div className={classes.section__image}>
				{props.children}
		</div>
	)
}

export default SectionImage;
