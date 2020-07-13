import React, { PureComponent } from 'react';
import './style.css';

class Navbar extends PureComponent {
	render() {
		return (
			<header className="header">
				<div className="header-logo">NoToRacism! </div>
				<nav className="header-menu">
					<button className="header-menu-button" type="button" name="ifClickGroup">
						Add Column
					</button>
					<button className="header-menu-button" type="button" name="ifClickEvent">
						Add Cards
					</button>
				</nav>
			</header>
		);
	}
}

export default Navbar;
