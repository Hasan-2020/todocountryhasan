import I from 'immutable';

const INITIAL_STATE = {
	ifClickEvent: 0,
	ifClickGroup: 0,
	groupNameInput: '',
	eventHeader: '',
	eventContent: '',
	eventTags: '2',
	eventDate: '',
	eventGroupName: 'Okul',

	groups: [
		{
			groupId: 1,
			groupName: 'Physics',
			cards: [
				{
					header: 'Tauhid Hasan',
					text: 'He is from Bangladesh',
					imgSrc: '',
					date: '19-07-2020',
					tags: 2,
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
					date: '19-07-2020',
					tag: 2,
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
					date: '19-07-2020',
					tag: 3,
				},
			],
		},
	],
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'HANDLE_CHANGE': {
			const stateImmutable = I.Map(state);
			const newState = stateImmutable.set(action.name, action.value);

			return newState;
		}
		case 'ADD_GROUP': {
			const groups = I.List(I.Map(state).get('groups', [' '])).toJS();
			const groupNameInput = I.Map(state).get('groupNameInput', ' ');
			const lastGroup = groups[groups.length - 1];
			let newGroupId;
			if (lastGroup) {
				newGroupId = lastGroup.groupId + 1;
			} else {
				newGroupId = 0;
			}
			const newGroups = {
				groupId: newGroupId,
				groupName: groupNameInput,
				cards: [],
			};
			const immutableGroups = I.List(groups).push(newGroups);
			return {
				groups: immutableGroups,
				ifClickGroup: false,
				ifClickEvent: false,
				groupNameInput: '',
				eventHeader: '',
				eventContent: '',
				eventTags: '2',
				eventDate: '',
				eventGroupName: 'Okul',
			};
		}
		case 'SHOW_FORM': {
			const stateImmutable = I.Map(state);

			const ifClickEvent = stateImmutable.get('ifClickEvent', 'err');
			const ifClickGroup = stateImmutable.get('ifClickGroup', 'err');

			let val;
			if (action.name === 'ifClickEvent') {
				val = ifClickEvent;
			} else if (action.name === 'ifClickGroup') {
				val = ifClickGroup;
			}
			const newState = stateImmutable.set(action.name, !val);
			console.log(newState.toJS());
			return newState;
		}
		case 'HANDLE_SUBMIT': {
			console.log('submit', state);
			const { groups, eventHeader, eventContent, eventDate, eventTags, eventGroupName } = I.Map(state).toJS();
			let index;
			console.log(groups);
			groups.map((val, i) => {
				if (val.groupName === eventGroupName) {
					index = i;
				}
			});
			const newCard = {
				header: eventHeader,
				text: eventContent,
				imgSrc: '',
				date: eventDate,
				tag: eventTags,
			};
			const oldCards = I.Map(I.List(groups).get(index)).get('cards');
			const newCards = I.List(oldCards).push(newCard);
			const xd = I.Map(I.List(groups).get(index, 0)).update('cards', (val) => newCards);
			let newGroups = groups.map((val, i) => {
				if (i === index) {
					return xd.toJS();
				}
				return val;
			});
			console.log('new', groups);
			return {
				...state,
				groups: newGroups,
				ifClickEvent: false,
				ifClickGroup: false,
				eventHeader: '',
				eventContent: '',
				eventDate: '',
				eventTags: 2,
				eventGroupName: 'Okul',
			};
		}
		case 'DELETE_COLON': {
			const groups = I.List(I.Map(state).get('groups', [' ']));
			const newGroups = groups.delete(action.groupId);
			console.log(newGroups.toJS());
			return { ...state, groups: newGroups };
		}
		case 'DELETE_CARD': {
			const groups = I.List(I.Map(state).get('groups', [' '])).toJS();
			console.log(action.groupId);
			console.log(action.cardIndex);
			let index;
			groups.map((val, i) => {
				if (val.groupId === action.groupId) {
					index = i;
				}
			});
			console.log('groups', groups);
			console.log('index', index);
			const cards = I.Map(I.List(groups).get(index), 0).get('cards', [' ']);
			const newCards = I.List(cards).delete(action.cardIndex);
			const newGroup = I.Map(I.List(groups).get(index, 0)).update('cards', (val) => newCards);
			const responseGroup = groups.map((val, i) => {
				if (index === i) {
					return newGroup.toJS();
				}
				return val;
			});
			console.log('cards', cards);
			console.log('newGroup', newGroup.toJS());

			console.log('newCard', newCards.toJS());
			return {
				...state,
				groups: responseGroup,
			};
		}
		default:
			return state;
	}
};
export default reducer;
