import React from 'react';
import Link from 'next/link';



import classes from './logo.scss';

const logo = () => {
	return (
			<Link prefetch href="/">
				<a className={classes.link}>
					<span className='logo'>
							<img src="/static/images/bitcoin.png" alt="Logo"/>
						</span>
				</a>
			</Link>
	)
}

export default logo
