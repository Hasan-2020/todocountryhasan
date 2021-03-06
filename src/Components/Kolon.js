import React from 'react';
import { connect } from 'react-redux';
import I from 'immutable';
import Card from './Card';
import './style.css';

function Kolon({ groups, deleteColon }) {
	return groups.map((group, i) => {
		return (
			<section className="column" key={group.groupId + Math.random()}>
				<h2 className="column-header">{group.groupName}</h2>
				<button className="column-button-add" type="button">
					Add Cards
				</button>
				<button
					onClick={() => {
						deleteColon(i);
					}}
					className="column-button"
					type="button"
				>
					Delete Column
				</button>

				<Card groupId={group.groupId} Cards={group.cards} />
			</section>
		);
	});
}

const mapStateToProps = (state) => {
	return {
		groups: I.Map(state).get('groups', ['']),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteColon: (id) =>
			dispatch({
				type: 'DELETE_COLON',
				groupId: id,
			}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Kolon);
