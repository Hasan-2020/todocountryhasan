import React from 'react';
import Kolon from './Kolon';

import './style.css';

function Main(props) {
	console.log(props);
	const { ifClickEvent, handleChange, ifClickGroup, groups, groupNameInput, addGroup, eventHeader, eventTags, eventDate, eventContent, handleSubmit, cardDelete } = props;
	return (
		<main className=" main">
			<Kolon groups={groups} cardDelete={cardDelete} />
			<div>
				<form className={'main-form' + (ifClickGroup ? '-toggle' : ' ')}>
					<label for="GroupName" className="main-form-show-label">
						Country Name
						<input value={groupNameInput} onChange={handleChange} type="text" name="groupNameInput" className="main-form-show-input" />
					</label>
					<input onClick={addGroup} value={'Add'} type="Submit" className="main-form-show-submit" />
				</form>

				<form className={'main-form' + (ifClickEvent ? '-toggle' : ' ')}>
					<label htmlFor="baslik" className="main-form-show-label">
						Name Surname
						<input name="eventHeader" onChange={handleChange} type="text" className="main-form-show-input" value={eventHeader} />
					</label>
					<label htmlFor="icerik" className="main-form-show-label">
						Introduce Yourself
						<textarea name="eventContent" type="text" className="main-form-show-input" onChange={handleChange} value={eventContent} />
					</label>
					<label htmlFor="tarih" className="main-form-show-label">
						Birthdate
						<input onChange={handleChange} value={eventDate} name="eventDate" type="date" />
					</label>
					<label htmlFor="etiket" className="main-form-show-label">
						Level
						<select onChange={handleChange} name="eventTags" value={eventTags}>
							<option value="2">level01</option>
							<option value="3">Level02</option>
							<option value="4">Level03</option>
						</select>
					</label>
					<label htmlFor="group" className="main-form-show-label">
						Grup
						<select onChange={handleChange} name="eventGroupName" className="main-form-show-select">
							{groups.map((val) => {
								return (
									<option key={val.groupId} value={val.groupName}>
										{val.groupName}
									</option>
								);
							})}
						</select>
					</label>
					<input onClick={handleSubmit} className="main-form-show-submit" type="submit" value="Ekle" />
				</form>

				{/* <form className={'main-form' + (ifClickEvent ? '-toggle' : ' ')}>
					<label for="firstName" className="main-form-show-label">
						Name and Surname
						<input onChange={handleChange} value={eventHeader} name="eventHeader" type="text" className="main-form-show-input" />
					</label>
					<label htmlFor="LastName" className="main-form-show-label">
						Tell Us Yourself
						<textarea onChange={handleChange} value={eventContent} name="eventContent" type="text" className="main-form-show-input" />
					</label>
					<label htmlFor="date" className="main-form-show-label">
						Birthdate
						<input onChange={handleChange} value={eventDate} name="eventDate" type="date" />
					</label>
					<label htmlFor="etiket" className="main-form-show-label">
						Gender
						<select value={eventTags} onChange={handleChange} name="eventTags">
							<option value="2">Male</option>
							<option value="3">Female</option>
							<option value="4">Others</option>
						</select>
					</label>
					<label htmlFor="column" className="main-form-show-label">
						Depaertment
						<select onChange={handleChange} name="eventGroupName" className="main-form-show-select">
							{groups.map((val) => {
								return (
									<option key={val.groupId} value={val.groupName}>
										{val.groupName}
									</option>
								);
							})}
						</select>
					</label>
					<input className="main-form-show-submit" type="submit" value="Add" />
				</form> */}
			</div>
		</main>
	);
}

export default Main;
