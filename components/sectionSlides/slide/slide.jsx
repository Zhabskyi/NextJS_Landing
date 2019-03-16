import React from 'react';

import classes from './slide.scss';
import Quotes from '../../quotes/quotes';

const slide = (props) => {
	return (
		<div className={classes.container}>
			<div className={classes.quotes}>
				<Quotes color={props.quotesColor} size={props.quotesSize} />
			</div>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea rem, voluptatum minima nulla qui aut, velit numquam eveniet minus delectus voluptatem pariatur voluptas inventore veritatis porro sapiente repellat ab soluta?</p>
			<p>wwwwwdfdfgrgfdvffvfvv</p>
		</div>
	)
}

export default slide
