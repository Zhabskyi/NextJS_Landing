import React from 'react';

import classes from './ProfitsBlockItem.scss';
import classnames from 'classnames';
import Divider from '../../divider/divider';

const ProfitsBlockItem = (props) => {
	return (
		<div className={classnames(classes.block, classes.col_3, classes.col_md_4, classes.col_sm_12)}>
			<div className={classes.block__image}>
				<div className={classes.block__image__wrap}>
					<img src={props.imgSrc}/>
				</div>
			</div>
			<p>{props.title}</p>
			<Divider color='divider__green'/>
			<p>{props.text}</p>
		</div>
	)
}

export default ProfitsBlockItem;
