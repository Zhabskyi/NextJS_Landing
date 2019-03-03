import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';

import classes from './nav.scss';

import Button from '../button/button';
import MenuToggle from '../menuToggle/menuToggle';
import Logo from '../logo/logo';
import NavItems from './nav-items/navItems';
import SideDrawer from '../sideDrawer/sideDrawer';
import SignUp from '../forms/signUp/signUp';

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Benefit' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Pricing' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Testimonials' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Client' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)',
		color                 : 'black'
  }
};

Modal.setAppElement('#main');

class Nav extends React.Component {
	state ={
		showSideDrawer: false,
		modalIsOpen: false
	}

	openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false})
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}

	render() {
		return(
			<React.Fragment>
				<nav id='main' className={classes.navbar}>
					<Modal
						isOpen={this.state.modalIsOpen}
						onAfterOpen={this.afterOpenModal}
						onRequestClose={this.closeModal}
						style={customStyles}
						contentLabel="Example Modal">
							<SignUp />
					</Modal>
					<MenuToggle onClick={this.sideDrawerToggleHandler}/>
					<div className={classes.navbar__logo}>
						<Logo/>
					</div>
					<div className={classes.navbar__list}>
						<NavItems/>
					</div>
					<div className={classes.navbar__right}>
						<li className={classes.navbar__item}>
							<Link prefetch href="/">
								<a className={classes.navbar__item__link}>Login</a>
							</Link>
						</li>
						<Button 
							btnType='success'
							title='Register'
							onClick={this.openModal}/>
					</div>
				</nav>
				<SideDrawer
					open={this.state.showSideDrawer}  
					closed={this.sideDrawerClosedHandler}
					onClick={this.sideDrawerClosedHandler}/>
			</React.Fragment>
		)
	}
}
export default Nav
