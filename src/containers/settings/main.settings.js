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
			{props.accountTypeProp === 'shelter' && (props.shelterProfileSettingsProp.unset || props.editShelterOverrideBoolean) && 
				<form className="form-shelter-profile" id="shelter-profile" onSubmit={(e) => {props.shelterProfileProp(e)}}>
					<p className="section-header">profile settings</p>
					<div className="form-input">
						<label className="form-input-label">Shelter Name</label>
						<input name="shelter-name" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">Address</label>
						<input name="shelter-address" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">City</label>
						<input name="shelter-city" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">State</label>
						<input name="shelter-state" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">Zip</label>
						<input name="shelter-zip" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">Phone Number</label>
						<input name="shelter-phone" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">Email Address</label>
						<input name="shelter-email" type="text"/>
					</div>
					<button type="submit" className="button">Save</button>
					<div className="divider">&nbsp;</div>
				</form>
			}

			{props.accountTypeProp === 'shelter' && !props.editShelterOverrideBoolean && 
				<div className="location">
					<p className="section-header">profile settings</p>
					<p className="name">{props.shelterProfileSettingsProp.name || "N/A"}</p>
					<p className="address">350 South Huntington Avenue</p>
					<p className="address">Boston, MA 02130</p>
					<p className="telephone">617-522-5055</p>
					<p className="email">adoption@mspca.org</p>
					<button className="button" onClick={() => {props.editShelterProfileOverrideProp()}}>Edit</button>
					<div className="divider">&nbsp;</div>
				</div>
			}

			{/* shared account settings */}
			<p className="section-header">account settings</p>
			<div className="account-settings">
				<p>Reset password</p>
				<div className="form-input">
					<label className="form-input-label" htmlFor="oldPassword">Old password:</label>
					<input id="oldPassword" type="text" />
				</div>
				<div className="form-input">
					<label className="form-input-label" htmlFor="newPassword">New password:</label>
					<input id="newPassword" type="text" />
				</div>
				<a onClick={(e) => {props.resetPasswordProp(e)}}>Submit</a>
				<hr/>
				<p><a onClick={logOutFn}>Log out</a></p>
				<hr/>
				<p><a onClick={(e) => {props.deactivateAccountProp(e)}}>Delete account</a></p>
			</div>

			{/* 
				TODO: 
				integrate location services 
			*/}

			{/* ADOPTERS */}
			{/* 
			<div className="discovery discovery-settings">
				<p>discovery settings</p>
				<p>location</p>
				<p>maximum distance</p>
				<p>gender</p>
				<p>age</p>
				<p>size</p>
			</div>
			*/}

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
			
			{/*<button type="submit" className="button">Edit</button>*/}
			{/*<button type="submit" className="button">Save</button>*/}
		</aside>
	)
}