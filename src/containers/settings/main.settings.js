import React from 'react';

export default function Settings(props)
{
	const logOutFn = () => {
		delete localStorage.userId;
		delete localStorage.adopterId;
		delete localStorage.shelterId;
		window.location.href = "/";
		return false;
	}

	return(
		<aside className="settings">
			<p className="section-header">settings</p>
			{/* 
				TODO: 
				integrate location services 
			*/}

			{/* ADOPTERS */}
			<div className="discovery discovery-settings">
				<p>discovery settings</p>
				<p>location</p>
				<p>maximum distance</p>
				<p>gender</p>
				<p>age</p>
				<p>size</p>
			</div>

			<div className="account-settings">
				<p>account settings</p>
				<p onClick={logOutFn}>log out</p>
				<p onClick={(e) => {props.resetPasswordProp(e)}}>reset password</p>
				<input id="oldPassword" />
				<input id="newPassword" />
				<p onClick={(e) => {props.deactivateAccountProp(e)}}>delete account</p>
			</div>

			{/* ADOPTERS EDIT */}
			{/*
			<div className="form-input">
				<label>location</label>
				<input name="location" type="text"/>
			</div>
			<div className="form-input">
				<label>maximum distance</label>
				<input name="max-distance" type="text"/>
			</div>
			<div className="form-input">
				<label>gender</label>
				<input name="gender" type="text"/>
			</div>
			<div className="form-input">
				<label>age</label>
				<input name="age" type="text"/>
			</div>
			<div className="form-input">
				<label>size</label>
				<input name="size" type="text"/>
			</div>
			*/}

			{/* SHELTERS */}
			{/*
			<div className="location">
				<p>shelter profile</p>
				<p className="name">MSPCA Boston</p>
				<p className="address">350 South Huntington Avenue</p>
				<p className="address">Boston, MA 02130</p>
				<p className="telephone">617-522-5055</p>
				<p className="email">adoption@mspca.org</p>
			</div>
			*/}

			{/* SHELTERS EDIT */}
			{/*
			<div className="form-input">
				<label>Shelter Name</label>
				<input name="shelter-name" type="text"/>
			</div>
			<div className="form-input">
				<label>Address</label>
				<input name="shelter-address" type="text"/>
			</div>
			<div className="form-input">
				<label>City</label>
				<input name="shelter-city" type="text"/>
			</div>
			<div className="form-input">
				<label>State</label>
				<input name="shelter-state" type="text"/>
			</div>
			<div className="form-input">
				<label>Zip</label>
				<input name="shelter-zip" type="text"/>
			</div>
			<div className="form-input">
				<label>Phone Number</label>
				<input name="shelter-phone" type="text"/>
			</div>
			<div className="form-input">
				<label>Email Address</label>
				<input name="shelter-email" type="text"/>
			</div>

			<div className="account-settings">
				<p>account settings</p>
				<p>log out</p>
				<p>reset password</p>
				<p>delete account</p>
			</div>
			*/}
			
			<button type="submit" className="button">Edit</button>
			{/*<button type="submit" className="button">Save</button>*/}
		</aside>
	)
}