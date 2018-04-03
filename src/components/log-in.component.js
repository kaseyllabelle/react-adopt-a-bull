import React, {Fragment} from 'react';

export default function LogIn(props)
{
	const signUpConst = (<div className="form-sign-up">
		<div className="form-input">
			<label>account type:</label>
			<div className="radio-button-bar">
				<div className="radio-button-wrapper">
					<input type="radio" className="radio-button" id="user-type-shelter" name="user-type" value="shelter" disabled/>
					<label htmlFor="user-type-shelter" className="radio-button-label radio-button-label-left">Shelter</label>
				</div>
				<div className="radio-button-wrapper">
					<input type="radio" className="radio-button" id="user-type-adopter" name="user-type" value="adopter" defaultChecked={true}/>
					<label htmlFor="user-type-adopter" className="radio-button-label radio-button-label-right">Adopter</label>
				</div>
			</div>
		</div>
		<button type="submit" className="button">Create Account</button>
	</div>)

	const signInConst = (<div className="form-sign-in">
		<a href="mailto:kll.design.dev@gmail.com" className="forgot-password">forgot password?</a>
		<button type="submit" className="log-in-button" onClick={(e) => {props.signInProp(e)}}>Log In</button>
	</div>)

	return(
		<Fragment>
			{props.logInProp ? signInConst : signUpConst}
		</Fragment>
	)
}