import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

class App extends Component {
	constructor() {
		super();
		this.state = {
			ifClickEvent: 0,
			ifClickGroup: 0,
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	toggleForm = (e) => {
		console.log(e.target.name);
		const { name } = e.target;
		const { ifClickGroup, ifClickEvent } = this.state;
		let val;
		if (name === 'ifClickGroup') {
			console.log('value fo Group', ifClickGroup);
			val = ifClickGroup;
		}
		if (name === 'ifClickEvent') {
			console.log('value of Event', ifClickEvent);
			val = ifClickEvent;
		}
		this.setState({ [name]: !val });
	};

	render() {
		const { ifClickGroup, ifClickEvent } = this.state;
		return (
			<div className="App">
				<Navbar toggleForm={this.toggleForm} />
				<Main ifClickGroup={ifClickGroup} ifClickEvent={ifClickEvent} handleChange={this.handleChange} />
			</div>
		);
	}
}

export default App;
