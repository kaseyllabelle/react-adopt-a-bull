import React from 'react';

export default function Settings(props)
{
	return(
		<aside className="settings">
			{/* TODO: integrate location services */}
			<p className="section-header">settings</p>
			<div>
				{/*<p>Coming soon!</p>*/}
				<div className="discovery discovery-settings">
					<p>discovery settings <i className="material-icons">edit</i></p>
					<p>location</p>
					<p>maximum distance</p>
					<p>gender</p>
					<p>age</p>
					<p>size</p>
				</div>
				<div className="account-settings">
					<p>account settings <i className="material-icons">edit</i></p>
					<p>log out</p>
					<p>reset password</p>
					<p>delete account</p>
				</div>
				{/*
					ADOPTERS
					<aside class="settings">
						<p class="section-header">settings</p>
						<div class="discovery">
							<p>discovery settings</p>
							<i class="material-icons">edit</i>
							<p>location</p>
							<p>maximum distance</p>
							<p>gender</p>
							<p>age</p>
							<p>size</p>
						</div>
						<div>
							<p>account settings</p>
							<p>log out</p>
							<p>reset password</p>
							<p>delete account</p>
						</div>
					</aside>

					ADOPTERS EDIT
					<div class="form-input">
						<label>location</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>maximum distance</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>gender</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>age</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>size</label>
						<input type="text"/>
					</div>

					SHELTERS
					<aside class="settings">
						<p class="section-header">settings</p>
						<!-- 
							create form with inputs and labels
							use javascript to display data instead of form
						 -->
						<div class="location">
							<p>shelter profile</p>
							<i class="material-icons">edit</i>
							<hr>
							<p class="name">MSPCA Boston</p>
							<p class="address">350 South Huntington Avenue</p>
							<p class="address">Boston, MA 02130</p>
							<p class="telephone">617-522-5055</p>
							<p class="email">adoption@mspca.org</p>
						</div>
						<div>
							<hr>
							<p>log out</p>
							<!-- redirect to url and redirect to landing -->
							<hr>
							<p>reset password</p>
							<!-- 
								click reset pw, use javascript to swap to form
								form: current pw, new pw, confirm new pw, submit
								go to api/password-reset post method
							 -->
							<hr>
							<p>delete account</p>
							<!-- 
								click delete acct, use js to swap to form
								form: confirm delete account, submit
								go to api/account-delete delete method to delete user and redirect to landing
								don't actually delete user, just deactivate
							 -->
						</div>
					</aside>	

					SHELTERS EDIT
					<div class="form-input">
						<label>Shelter Name</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>Address</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>City</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>State</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>Zip</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>Phone Number</label>
						<input type="text"/>
					</div>
					<div class="form-input">
						<label>Email Address</label>
						<input type="text"/>
					</div>
				*/}
			</div>
		</aside>
	)
}