import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';

import classes from './nav.scss';
import customStyles from './customModalStyle';

import Button from '../button/button';
import MenuToggle from '../menuToggle/menuToggle';
import Logo from '../logo/logo';
import NavItems from './nav-items/navItems';
import SideDrawer from '../sideDrawer/sideDrawer';
import SignUp from '../forms/signUp/signUp';
import SignIn from '../forms/signIn/signIn';

Modal.setAppElement('#main');

class Nav extends React.Component {
	state ={
		showSideDrawer: false,
		signUpModalIsOpen: false,
		signInModalIsOpen: false
	}

	openSignUpModal = () => {
    this.setState({signUpModalIsOpen: true});
	}
	openSignInModal = () => {
    this.setState({signInModalIsOpen: true});
  }

  afterOpenSignUpModal = () => {
    // references are now sync'd and can be accessed.
  
	}
	afterOpenSignInModal = () => {
    // references are now sync'd and can be accessed.
  
  }

  closeSignUpModal = () => {
    this.setState({signUpModalIsOpen: false});
	}
	closeSignInModal = () => {
    this.setState({signInModalIsOpen: false});
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
			<>
				<nav id='main' className={classes.navbar}>
					<MenuToggle onClick={this.sideDrawerToggleHandler}/>
					<div className={classes.navbar__logo}>
						<Logo/>
					</div>
					<div className={classes.navbar__list}>
						<NavItems/>
					</div>
					<div className={classes.navbar__right}>
							<li className={classes.navbar__item} onClick={this.openSignInModal}>
								<Link prefetch href="/">
									<a className={classes.navbar__item__link}>Login</a>
								</Link>
							</li>
							<Button 
								btnType='success'
								title='Register'
								onClick={this.openSignUpModal}/>
					</div>
				</nav>
				<SideDrawer
					open={this.state.showSideDrawer}  
					closed={this.sideDrawerClosedHandler}
					onClick={this.sideDrawerClosedHandler}/>
				<Modal
					isOpen={this.state.signUpModalIsOpen}
					onAfterOpen={this.afterOpenSignUpModal}
					onRequestClose={this.closeSignUpModal}
					style={customStyles}
					contentLabel="Example Modal">
						<SignUp />
				</Modal>
				<Modal
					isOpen={this.state.signInModalIsOpen}
					onAfterOpen={this.afterOpenSignInModal}
					onRequestClose={this.closeSignInModal}
					style={customStyles}
					contentLabel="Example Modal">
						<SignIn />
				</Modal>
			</>
		)
	}
}
export default Nav
