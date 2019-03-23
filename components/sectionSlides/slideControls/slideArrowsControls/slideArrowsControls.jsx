import React from 'react';
import classes from './slideArrowsControls.scss';
import { faArrowRight, faArrowLeft } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const slideArrowsControls = (props) => {
	return (
		<>
			<button className={classes.prev}
				onClick={props.onClickPrev}>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			<button className={classes.next}
				onClick={props.onClickNext}>
				<FontAwesomeIcon icon={faArrowRight} />
			</button>
		</>
	)
}

export default slideArrowsControls;
