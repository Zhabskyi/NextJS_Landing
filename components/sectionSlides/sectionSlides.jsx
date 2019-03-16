import React, { Component } from 'react';

import classes from './sectionSlides.scss';
import Slide from './slide/slide';

export class sectionSlides extends Component {
	render() {
		return (
			<div className={classes.container}>
				<Slide quotesColor='white' quotesSize='small'/>
			</div>
		)
	}
}

export default sectionSlides;
