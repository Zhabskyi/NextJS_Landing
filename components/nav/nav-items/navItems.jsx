import React from 'react';
import Link from 'next/link';

import classes from './navItems.scss';
import classnames from 'classnames';


const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Benefit' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Pricing' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Testimonials' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Client' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});


const NavItems = (props) => (
      <ul className={classes.menu}>
				{links.map(({ key, href, label }) => (
					<li className={classes.item} key={key}>
						<Link href={href}>
							<a className={classnames(classes.item__link, props.className)}><span>{label}</span><span className={classes.divider}>{props.symbol}</span></a>
						</Link>
					</li>
				))}
      </ul>
)

export default NavItems
