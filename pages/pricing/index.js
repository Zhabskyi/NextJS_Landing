import React from 'react';
import Head from '../../components/head';
import Nav from '../../components/nav/nav';
import CopyRight from '../../components/copyRight/copyRight';
import FooterNav from '../../components/footerComponents/footerNav';



import classnames from 'classnames';
import classes from './index.scss';


const pricing = () => (
	<div className={classes.container}>
		<Head title="Home" />
			<div className={classes.topWrapper}>
				<Nav />
			<footer>
				<CopyRight>autocryp All Right Reserved</CopyRight>
				<FooterNav/>
			</footer>
			</div>
		</div>
	
)

export default pricing;
