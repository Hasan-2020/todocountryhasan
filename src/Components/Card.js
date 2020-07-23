import React from 'react';
import { connect } from 'react-redux';
import './style.css';

function Card({ Cards = ['any'], groupId, deleteCard }) {
	return Cards.map((card, i) => {
		if (card !== 'any') {
			return (
				<section key={Math.random()} className="card">
					<div className="card-info">
						<div className="card-info-left">
							<div className="card-info-left-header">{card.header}</div>
							<div className="card-left-text">{card.text}</div>
							<div className="card-left-tag">{card.tag}</div>
						</div>
						<div className="card-info-right">
							<div className="card-info-right-image">IMG</div>
							<div className="card-info-right-date">{card.date}</div>
							<input placeholder="Edit Cards"></input>
						</div>
					</div>
					<div>
						<button
							className="card-buttons"
							onClick={() => {
								deleteCard(groupId, i);
							}}
							type="button"
						>
							Delete Card
						</button>
					</div>
				</section>
			);
		}
		return <div key={card}>Nothing to add</div>;
	});
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteCard: (groupId, cardIndex) =>
			dispatch({
				type: 'DELETE_CARD',
				groupId,
				cardIndex,
			}),
	};
};

export default connect(null, mapDispatchToProps)(Card);
