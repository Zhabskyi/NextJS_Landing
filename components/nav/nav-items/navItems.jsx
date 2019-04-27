import React from 'react';


import { Link, animateScroll as scroll } from "react-scroll";

import classes from './navItems.scss';
import classnames from 'classnames';




const links = [
  { activeClass: 'active', to: 'Benefit', offset: -70, duration: 500 },
  { activeClass: 'active', to: 'Pricing', offset: 370, duration: 600 },
  { activeClass: 'active', to: 'Testimonials', offset: 120, duration: 1000 },
  { activeClass: 'active', to: 'Client', offset: -200, duration: 1200 }
].map(link => {
  link.key = `nav-link-${link.to}`
  return link
});


class NavItems extends React.Component {

	scrollToTop = () => {
    scroll.scrollToTop();
  };
 
	
	render() {
		return (
      <ul className={classes.menu}>
				{links.map(({ key, activeClass, to, offset, duration }) => (
					<li className={classes.item} key={key}>
						<div className={classnames(classes.link, this.props.className)}>
							<Link activeClass={activeClass}
								to={to}
								spy={true}
								smooth={true}
								offset={offset}
								duration={duration}
								onClick={this.props.onClick}>
								<span>{to}</span><span className={classes.divider}>{this.props.symbol}</span>
							</Link>
						</div>
					</li>
				))}
      </ul>
		)
	}
}

export default NavItems



 
// import React from 'react';
// //import Link from 'next/link';

// //import * as Scroll from 'react-scroll';
// //import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// import classes from './navItems.scss';
// import classnames from 'classnames';

// let Scroll = require('react-scroll');
// var Element = Scroll.Element;
// var scroller = Scroll.scroller;

// <Element name="myScrollToElement"></Element>

// // Somewhere else, even another file
// scroller.scrollTo('benefit', {
//   duration: 1500,
//   delay: 100,
//   smooth: true,
//   containerId: 'ContainerElementID',
//   offset: 50, // Scrolls to element + 50 pixels down the page
// })


// const links = [
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Benefit' },
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Pricing' },
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Testimonials' },
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Client' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// });


// const NavItems = (props) => (
//       <ul className={classes.menu}>
// 				{links.map(({ key, href, label }) => (
// 					<li className={classes.item} key={key}>
// 						<Link href={href}>
// 							<a className={classnames(classes.item__link, props.className)}
// 								onClick={this.scrollTo}>
// 								<span>{label}</span><span className={classes.divider}>{props.symbol}</span></a>
// 						</Link>
// 					</li>
// 				))}
//       </ul>
// )

// export default NavItems
