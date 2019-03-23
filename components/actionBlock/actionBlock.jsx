import Button from '../button/button';
import classes from './actionBlock.scss';
import Router from 'next/router';

const ActionBlock = (props) => {
		return 	<div className={[props.className, classes.actionBlock__content].join(' ')}>
				{props.children}
			<div className={classes.actionBlock__controls}>
					<Button 
						onClick={() => Router.push('/pricing')} 
						title='Get Started'
						btnType='successBig'/>
			</div>
			</div>

}

export default ActionBlock;