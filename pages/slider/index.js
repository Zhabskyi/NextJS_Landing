import React from 'react';

import Head from '../../components/head';
import Nav from '../../components/nav/nav';
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
				<Nav />
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
