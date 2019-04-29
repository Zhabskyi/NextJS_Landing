import React from 'react';

import Head from '../../components/head';
import Nav from '../../components/nav/nav';
import Logo from '../../components/logo/logo';
import Slider from '../../components/chartsSlider/chartsSlider';
import CopyRight from '../../components/copyRight/copyRight';
import FooterNav from '../../components/footerComponents/footerNav';

import config from '../../components/config/chartsSliderConfig';



import classnames from 'classnames';
import classes from './index.scss';


const pricing = () => (
	<div className={classes.container}>
		<Head title="Home" />
			<div className={classes.topWrapper}>
			<div className={classes.navbar}>
				<div className={classes.logo}>
					<Logo />
				</div>
			</div>
				<Slider
				slides={config}/>
			<footer>
				<CopyRight>autocryp All Right Reserved</CopyRight>
				<FooterNav/>
			</footer>
			</div>
		</div>
	
)

export default pricing;
