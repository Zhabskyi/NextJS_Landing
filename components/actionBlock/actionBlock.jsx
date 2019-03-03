import Button from '../button/button';
import classes from './actionBlock.scss';

const ActionBlock = (props) => {
		return 	<div className={[props.className, classes.actionBlock__content].join(' ')}>
				{props.children}
			<div className={classes.actionBlock__controls}>
					<Button 
						onClick={props.onClick} 
						title='Get Started'
						btnType='successBig'/>
			</div>
			</div>

}

export default ActionBlock;