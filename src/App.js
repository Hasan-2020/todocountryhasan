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
			groupNameInput: '',
			eventHeader: '',
			eventContent: '',
			eventTags: '2',
			eventDate: '',
			groups: [
				{
					groupId: 1,
					groupName: 'Physics',
					cards: [
						{
							header: 'Tauhid Hasan',
							text: 'He is from Bangladesh ',
							imgSrc: '',
							date: '16-06-2020',
							tags: 1,
						},
					],
				},
				{
					groupId: 2,
					groupName: 'Chemistry',
					cards: [
						{
							header: 'Yakup Akgöçmen',
							text: 'He is from Turkey',
							imgSrc: '',
							date: '17-06-2020',
							tags: 2,
						},
					],
				},
				{
					groupId: 3,
					groupName: 'Biology',
					cards: [
						{
							header: 'Ahmad Khalil',
							text: 'He is from Pakistan',
							imgSrc: '',
							date: '18-06-2020',
							tags: 3,
						},
					],
				},
			],
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.addGroup = this.addGroup.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.cardDelete = this.cardDelete.bind(this);
	}

	addGroup = (e) => {
		const { groups, groupNameInput } = this.state;
		let lastGroup = groups[groups.length - 1];
		const newGroupId = lastGroup.groupId + 1;
		const newGroups = {
			groupId: newGroupId,
			groupName: groupNameInput,
			cards: [],
		};

		groups.push(newGroups);
		this.setState({ groups, groupNameInput: '', ifClickGroup: 0 });
		e.preventDefault();
	};

	handleSubmit(e) {
		const { groups } = this.state;
		const { eventHeader, eventContent, eventDate, eventTags, eventGroupName } = this.state;
		let index;
		groups.map((val, i) => {
			if (val.groupName === eventGroupName) {
				index = i;
			}
		});

		const oldCard = groups[index].cards;
		const newCard = {
			header: eventHeader,
			text: eventContent,
			imgSrc: '',
			date: eventDate,
			tag: eventTags,
		};

		oldCard.push(newCard);
		console.log(oldCard);
		this.setState({
			groups,
			eventHeader: '',
			eventContent: '',
			eventDate: '',
			eventTags: 2,
			eventGroupName: 'Physics',
			ifClickEvent: 0,
		});
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

	cardDelete(e, groupId) {
		console.log('cardDelete');
		console.log(e);
	}

	render() {
		const { ifClickGroup, ifClickEvent, eventGroupName, groupNameInput, groups, eventHeader, eventContent, eventDate, eventTags } = this.state;
		return (
			<div className="App">
				<Navbar toggleForm={this.toggleForm} />
				<Main
					ifClickGroup={ifClickGroup}
					ifClickEvent={ifClickEvent}
					handleChange={this.handleChange}
					eventGroupName={eventGroupName}
					groupNameInput={groupNameInput}
					addGroup={this.addGroup}
					groups={groups}
					handleSubmit={this.handleSubmit}
					eventHeader={eventHeader}
					eventContent={eventContent}
					eventDate={eventDate}
					eventTags={eventTags}
					cardDelete={this.cardDelete}
				/>
			</div>
		);
	}
}

export default App;

// Bu uygulama da State Yok
