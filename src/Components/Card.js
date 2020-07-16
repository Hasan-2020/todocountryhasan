import React from 'react';
import './style.css';

function Card({ Cards = ['any'], cardDelete, groupId }) {
	console.log(groupId);
	return Cards.map((card, i) => {
		if (card !== 'any') {
			return (
				<div key={card.header + i} className="card">
					<div className="card-left">
						<div className="card-left-header">{card.header}</div>
						<div className="card-left-text">{card.text}</div>
						<div className="card-left-tag">{card.tag}</div>
					</div>
					<div className="card-right">
						<div className="card-right-image">IMG</div>
						<div className="card-right-date">{card.date}</div>
					</div>
					<button onClick={() => cardDelete(groupId)} className="button-card">
						Delete Cards
					</button>
				</div>
			);
		}
		return <div key={card}>Sorry!</div>;
	});
}
export default Card;
