import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Column from './Components/Column.js';

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
				<Column />
			</div>
		);
	}
}

export default App;
