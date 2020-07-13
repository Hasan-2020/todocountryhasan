import React from 'react';
import './style.css';

function Main() {
	return (
		<main className="main">
			<div>
				<form className="main-form">
					<label htmlFor="GroupName" className="main-form-show-label">
						Country Name
						<input type="text" name="groupNameInput" className="main-form-show-input" />
					</label>
					<input type="Submit" className="main-form-show-submit" />
				</form>

				<form className="main-form">
					<label htmlFor="firstName" className="main-form-show-label">
						Name and Surname
						<input name="eventFname" type="text" className="main-form-show-input" />
					</label>
					<label htmlFor="LastName" className="main-form-show-label">
						Tell Us Yourself
						<textarea name="eventLname" type="text" className="main-form-show-input" />
					</label>
					<label htmlFor="date" className="main-form-show-label">
						Birthdate
						<input name="eventDate" type="date" />
					</label>
					<label htmlFor="etiket" className="main-form-show-label">
						Gender
						<select name="eventTags">
							<option value="2">Male</option>
							<option value="3">Female</option>
							<option value="4">Others</option>
						</select>
					</label>
					<label htmlFor="column" className="main-form-show-label">
						Column
						<select name="eventColumnName" className="main-form-show-select">
							<option value="2">Turkey</option>
							<option value="3">Bangladesh</option>
							<option value="4">Pakistan</option>
						</select>
					</label>
					<input className="main-form-show-submit" type="submit" value="Add" />
				</form>
			</div>
		</main>
	);
}

export default Main;