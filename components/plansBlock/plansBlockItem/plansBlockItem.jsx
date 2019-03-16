import React from 'react';

import classes from './plansBlockItem.scss';
import classnames from 'classnames';
import PlansBlockItemInfo from './plansBlockItemInfo/plansBlockItemInfo';

const plansBlockItem = (props) => {

	let attachedClassesFront = classnames(classes.card__side, classes.card__side_front, classes.Front);

	if (props.isMonthly) {
		attachedClassesFront = classnames(classes.card__side, classes.card__side_front);
	}

	let attachedClassesBack = classnames(classes.card__side, classes.card__side_back, classes.Back);

	if (props.isMonthly) {
		attachedClassesBack = classnames(classes.card__side, classes.card__side_back);
	}


	return (
		<div className={classes.card}>
			<div className={attachedClassesFront}>
				<PlansBlockItemInfo 
					head={props.head}
					priceMonth={props.priceMonth}
					periodMonth={props.periodMonth}
					benefits={props.benefits}/>
			</div>
			<div className={attachedClassesBack}>
				<PlansBlockItemInfo 
						head={props.head}
						priceYearly={props.priceYearly}
						periodYear={props.periodYear}
						benefits={props.benefits}/>
			</div>
		</div>
	)
}

export default plansBlockItem