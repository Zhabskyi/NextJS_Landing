import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav/nav';
import Section from '../components/section/section';
import ActionBlock from '../components/actionBlock/actionBlock';
import SectionImage from '../components/sectionImage/sectionImage';
import ProfitsBlock from '../components/profitsBlock/ProfitsBlock';
import PlansBlock from '../components/plansBlock/PlansBlock';
import BottomSection from '../components/bottomSection/bottomSection';
import FooterBrands from '../components/footerComponents/footerBrands';
import CopyRight from '../components/copyRight/copyRight';
import FooterNav from '../components/footerComponents/footerNav';


import classnames from 'classnames';
import classes from './index.scss';


const Home = () => (
	<div className={classes.container}>
		<Head title="Home" />
			<div className={classes.topWrapper}>
				<Nav />
				<Section>
				<div className={classnames(classes.row, classes.row_align_center)}>
					<div className={classnames(classes.col_8, classes.col_sm_12)}>
						<ActionBlock>
							<p className={classes.topSectionHeading}>Easiest way to mining <br/> your bitcoin</p>
							<p className={classes.topSectionParagraph}>Autocryp is the place to buy and sell Bitcoin, Ethereum and various kinds of Digital Assets in Indonesia. Then, book your weekly, bi-weekly or one-off clean online with imminent confirmation.</p>
						</ActionBlock>
					</div>
					<div className={classnames(classes.col_4, classes.col_sm_12)}>
						<SectionImage>
							<img src="/static/images/phone.png" alt="Phone image"/>
						</SectionImage>
					</div>
				</div>
				</Section>
				<ProfitsBlock />
			</div>
			<PlansBlock />
			<BottomSection/>
			<footer>
				<h3>WORKS WITH ANY PLATFORM</h3>
				<FooterBrands/>
				<CopyRight>autocryp All Right Reserved</CopyRight>
				<FooterNav/>
			</footer>
		</div>
	
)

export default Home
