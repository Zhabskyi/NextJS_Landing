import React from 'react';

import classes from  './section.scss';
import classnames from 'classnames';

const Section = (props) => {
	return (
		<>
			<section id={props.id} className={classnames(classes.section, props.className)}>
				<div className={classes.section__wrapper}>
					<div className={classes.section__content}>
						{props.children}
					</div>
				</div>
			</section>
		</>
	)
}

export default Section;
