import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav/nav';
import Section from '../components/section/section';
import ActionBlock from '../components/actionBlock/actionBlock';
import SectionImage from '../components/sectionImage/sectionImage';
import SignUp from '../components/forms/signUp/signUp';
import Modal from 'react-modal';


import classes from './index.scss';

const Home = () => (
	<React.Fragment>
		<Head title="Home" />
		<div className={classes.topWrapper}>
			<Nav />
			<Section>
			<div className={[classes.row, classes.row_align_center].join(' ')}>
				<div className={[classes.col_8, classes.col_sm_12].join(' ')}>
					<ActionBlock>
						<p className={classes.topSectionHeading}>Easiest way to mining <br/> your bitcoin</p>
						<p className={classes.topSectionParagraph}>Autocryp is the place to buy and sell Bitcoin, Ethereum and various kinds of Digital Assets in Indonesia. Then, book your weekly, bi-weekly or one-off clean online with imminent confirmation.</p>
					</ActionBlock>
				</div>
				<div className={[classes.col_4, classes.col_sm_12].join(' ')}>
					<SectionImage>
						<img src="/static/images/phone.png" alt="Phone image"/>
					</SectionImage>
				</div>
			</div>
			</Section>
		</div>
	</React.Fragment>
	
)

export default Home
