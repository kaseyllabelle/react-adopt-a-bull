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
	console.log(props.shelterProfileSettingsProp)

	return(
		<aside className="settings">
			{props.accountTypeProp === 'shelter' && (props.shelterProfileSettingsProp.unset || props.editShelterOverrideBoolean) && 
				<form className="form-shelter-profile" id="shelter-profile" onSubmit={(e) => {props.shelterProfileProp(e)}}>
					<p className="section-header">profile settings</p>
					<div className="form-input">
						<label className="form-input-label">Shelter Name</label>
						<input name="name" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">Number</label>
						<input name="number" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">Street</label>
						<input name="street" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">City</label>
						<input name="city" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">State</label>
						<input name="state" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">Zip</label>
						<input name="zipcode" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">Phone Number</label>
						<input name="phone" type="text"/>
					</div>
					<div className="form-input">
						<label className="form-input-label">Email Address</label>
						<input name="email" type="text"/>
					</div>
					<button type="submit" className="button">Save</button>
					<div className="divider">&nbsp;</div>
				</form>
			}

			{props.accountTypeProp === 'shelter' && !props.editShelterOverrideBoolean && 
				<div className="location">
					<p className="section-header">profile settings</p>
					<p className="name">{props.shelterProfileSettingsProp.name || "N/A"}</p>
					{/*
					<p className="address">{props.shelterProfileSettingsProp.address.number || "N/A"} {props.shelterProfileSettingsProp.address.street || "N/A"}</p>
					<p className="address">{props.shelterProfileSettingsProp.address.city || "N/A"}, {props.shelterProfileSettingsProp.address.state || "N/A"} {props.shelterProfileSettingsProp.address.zip || "N/A"}</p>
					*/}
					<p className="telephone">{props.shelterProfileSettingsProp.phone || "N/A"}</p>
					<p className="email">{props.shelterProfileSettingsProp.email || "N/A"}</p>
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