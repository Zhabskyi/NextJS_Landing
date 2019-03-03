import React from 'react';

import classes from  './section.scss';

const Section = (props) => {
	return (
		<React.Fragment>
			<section id={props.id} className={[classes.section, classes[props.className]].join(' ')}>
				<div className={classes.section__wrapper}>
					<div className={classes.section__content}>
						{props.children}
					</div>
				</div>
			</section>
		</React.Fragment>
	)
}

export default Section;
