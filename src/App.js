import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<Main />
			</div>
		);
	}
}

export default App;
