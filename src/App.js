import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Group from './Components/Group';
import Hello from './Components/Hello';
// import './App.css';

class App extends PureComponent {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Main} />
					<Route path="/Groups/:groupName" component={Group} />
					<Route exact path="/Hello" component={Hello} />
				</div>
			</Router>
		);
	}
}

export default App;
