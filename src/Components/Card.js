import React from 'react';

function Card() {
	return (
		<div className="card">
			<div className="card-left">
				<div className="card-left-header"></div>
				<div className="card-left-text"></div>
				<div className="card-left-tag"></div>
			</div>
			<div className="card-right">
				<div className="card-right-image"></div>
				<div className="card-right-date"></div>
			</div>
		</div>
	);
}

export default Card;
