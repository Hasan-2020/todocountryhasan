import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

class Navbar extends PureComponent {
	render() {
		const { showForm } = this.props;
		return (
			<header className="header">
				<div className="header-logo">NoToRacism! </div>
				<nav className="header-menu">
					<button onClick={showForm} className="header-menu-button" type="button" name="ifClickGroup">
						Add Column
					</button>
					<button onClick={showForm} className="header-menu-button" type="button" name="ifClickEvent">
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

const mapStateToProps = (state) => {
	return {
		// ifClickEvent: state.ifClickEvent,
		// ifClickGroup: state.ifClickGroup,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		showForm: (e) =>
			dispatch({
				type: 'SHOW_FORM',
				name: e.target.name,
			}),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
