import React from 'react';
import Link from 'next/link';

import classes from './navItems.scss';


const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Benefit' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Pricing' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Testimonials' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Client' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const NavItems = () => (
      <ul className={classes.menu}>
				{links.map(({ key, href, label }) => (
					<li className={classes.item} key={key}>
						<Link href={href}>
							<a className={classes.item__link}><span>{label}</span></a>
						</Link>
					</li>
				))}
      </ul>
)

export default NavItems
