import React, { Component } from 'react';

import classes from './PlansBlock.scss';

import PlansBlocksItem from './plansBlockItem/plansBlockItem';
import PlansBlockButtons from './plansBlockButtons/plansBlockButtons';
import config from '../config/plansBlockConfig';

export class PlansBlock extends Component {
	state={
		isMonthlyPrice: true
	}

	MonthlyPricesHandler = () => {
		this.setState({isMonthlyPrice: true})
	}

	YearlyPricesHandler = () => {
		this.setState({isMonthlyPrice: false})
	}

	render() {

		let block = (
			<>
				{config.map(el => (
					<div key={el.priceMonth+el} className={classes.plansBlocksWrapper__block__item}>
						<PlansBlocksItem
							key={el.head+el}
							head={el.head}
							priceMonth={el.priceMonth} 
							priceYearly={el.priceYearly}
							periodMonth={el.periodMonth}
							periodYear={el.periodYear}
							benefits={el.benefits.map(item => <li key={item}>{item}</li> )}
							isMonthly={this.state.isMonthlyPrice}/>
						</div>
				))}
			</>
		);


			
		return (
			<div className={classes.plansBlocksWrapper} id="Pricing">
			<p>Paid plan starts with a 7-day free trial, No credit card required</p>
			<PlansBlockButtons
				isMonthlyPrice={this.state.isMonthlyPrice}
				onClickMonthly={this.MonthlyPricesHandler}
				onClickYearly={this.YearlyPricesHandler}/>
			<div className={classes.plansBlocksWrapper__block}>
				{block}
			</div>
		</div>
		)
	}
}

export default PlansBlock;