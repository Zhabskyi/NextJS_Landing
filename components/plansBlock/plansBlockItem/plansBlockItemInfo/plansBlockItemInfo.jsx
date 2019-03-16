import React from 'react';

import classes from './plansBlockItemInfo.scss';
import Button from '../../../button/button';

const plansBlockItemInfo = (props) => {

		let priceHolder;
		if (props.priceMonth) {
			priceHolder=(
				<>
					<li className={classes.title__price}>${props.priceMonth}</li>
					<li className={classes.title__period}>{props.periodMonth}</li>
				</>
				)
		} else {
			priceHolder=(
				<>
					<li className={classes.title__price}>${props.priceYearly}</li>
					<li className={classes.title__period}>{props.periodYear}</li>
				</>
				)
		}

	return (
		<>
		<div className={classes.card__side__item}>
			<div className={classes.title}>
				<ul>
					<li className={classes.title__head}>{props.head}</li>
					{priceHolder}
				</ul>
			</div>
			<div className={classes.option}>
				<ul  className={classes.option__list}>
					{props.benefits}
				</ul>
			</div>
		</div>
		<Button className={classes.button}
						btnType='successBig'
						title='START FREE TRIAL'/>
		</>
	)
}

export default plansBlockItemInfo
