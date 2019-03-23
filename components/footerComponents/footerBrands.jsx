import React from 'react';

import classes from './footerBrands.scss';
import { faAmazon, faEtsy, faYoutube, faKickstarter, faNeos } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footerBrands = () => {
	return (
		<div className={classes.container}>
			<div>
				<FontAwesomeIcon icon={faAmazon} style={{
					'position':'absolute',
					'top' : '10px'
					}}/>
				<span className={classes.amazon}>mazon</span>
			</div>
			<div>
				<FontAwesomeIcon icon={faEtsy} />
				<span>tsy</span>
			</div>
			<div>
				<FontAwesomeIcon icon={faYoutube} />
				<span> YouTube</span>
			</div><div>
				<FontAwesomeIcon icon={faNeos} />
				<span>eos</span>
			</div>
			<div>
				<FontAwesomeIcon icon={faKickstarter} />
				<span> KICKSTARTER</span>
			</div>
		</div>
	)
}

export default footerBrands
