import React from 'react';
import Card from './Card';
import './style.css';

function Kolon({ groups, cardDelete }) {
	console.log(groups);
	return groups.map((group) => {
		return (
			<section className="column" key={group.groupId}>
				<h2 className="column-header">{group.groupName}</h2>
				<Card Cards={group.cards} cardDelete={cardDelete} groupId={group.groupId} />
			</section>
		);
	});
}
export default Kolon;
