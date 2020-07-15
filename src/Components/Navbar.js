import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Navbar extends PureComponent {
	render() {
		const { toggleForm } = this.props;
		return (
			<header className="header">
				<div className="header-logo">NoToRacism! </div>
				<nav className="header-menu">
					<button onClick={toggleForm} className="header-menu-button" type="button" name="ifClickGroup">
						Add Column
					</button>
					<button onClick={toggleForm} className="header-menu-button" type="button" name="ifClickEvent">
						Add Cards
					</button>
				</nav>
			</header>
		);
	}
}
Navbar.propTypes = {
	showForm: PropTypes.func.isRequired,
};
export default Navbar;

// import React from 'react';
// import './style.css';

// function Navbar(props) {
// 	console.log(props);
// 	// const { toggleForm } = this.props;
// 	return (
// 		<header className="header">
// 			<div className="header-logo">NoToRacism! </div>
// 			<nav className="header-menu">
// 				<button onClick={this.toggleForm} className="header-menu-button" type="button" name="ifClickGroup">
// 					Add Column
// 				</button>
// 				<button onClick={this.toggleForm} className="header-menu-button" type="button" name="ifClickEvent">
// 					Add Cards
// 				</button>
// 			</nav>
// 		</header>
// 	);
// }

// export default Navbar;
