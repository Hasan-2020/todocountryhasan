import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

class App extends Component {
	constructor() {
		super();
		this.state = {
			ifClickEvent: 0,
			ifClickGroup: 0,
			groupNameInput: '',
			eventGroupName: 'Physics',
			groups: [
				{
					groupID: 1,
					groupName: 'Physics',
					cards: [],
				},
				{
					groupID: 2,
					groupName: 'Chemistry',
					cards: [],
				},
				{
					groupID: 3,
					groupName: 'Biology',
					cards: [],
				},
			],
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.addGroup = this.addGroup.bind(this);
	}

	addGroup(e) {
		const { groups, groupNameInput } = this.state;
		let lastGroup = groups[groups.length - 1];
		const newGroupId = lastGroup.groupId + 1;
		const newGroups = {
			groupId: newGroupId,
			groupName: groupNameInput,
			cards: [],
		};

		groups = [...groups, newGroups];
		this.setState({ groups, groupNameInput: '', ifClickGroup: 0 });
		e.preventDefault();
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
		const { ifClickGroup, ifClickEvent, eventKolonName, kolonNameInput, groups } = this.state;
		return (
			<div className="App">
				<Navbar toggleForm={this.toggleForm} />
				<Main ifClickGroup={ifClickGroup} ifClickEvent={ifClickEvent} handleChange={this.handleChange} eventkolonName={eventKolonName} KolonNameInput={kolonNameInput} addKolon={this.addKolon} groups={groups} />
			</div>
		);
	}
}

export default App;
