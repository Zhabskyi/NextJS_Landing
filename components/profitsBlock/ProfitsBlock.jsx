import React from 'react';

import classes from './ProfitsBlock.scss';
import ProfitsBlockItem from './profitsBlockItem/ProfitsBlockItem';

import config from '../config/profitsBlockConfig';

const ProfitsBlock = () => {
		let block = (
			<>
				{config.map(el => (
					<ProfitsBlockItem
						key={el.imgSrc+el}
						imgSrc={el.imgSrc} 
						title={el.title}
						text={el.text} />
				))}
				</>
		);

	return (
		<div className={classes.main}>
			<div className={classes.main__wrapper}>
				{block}
			</div>
		</div>
	)
}

export default ProfitsBlock;


