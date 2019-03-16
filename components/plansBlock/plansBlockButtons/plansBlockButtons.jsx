import React from 'react';

import classes from './plansBlockButtons.scss';
import classnames from 'classnames';

import Button from '../../button/button';


const plansBlockButtons = (props) => {

	let monthlyClasses;
	let yearlyClasses;

	if (props.isMonthlyPrice) {
		monthlyClasses = classnames(classes.button, classes.button_monthly, classes.Active);
		yearlyClasses = classnames(classes.button, classes.button_yearly);

	} else {
		monthlyClasses = classnames(classes.button, classes.button_monthly);
		yearlyClasses = classnames(classes.button, classes.button_yearly, classes.Active);
	}

	return (
		<div className={classes.container}>
			<Button className={monthlyClasses}
								title='MONTHLY'
								onClick={props.onClickMonthly}/>
			<Button className={yearlyClasses}
								title='YEARLY - 2 MONTH FREE'
								onClick={props.onClickYearly}/>
		</div>
	)
}

export default plansBlockButtons