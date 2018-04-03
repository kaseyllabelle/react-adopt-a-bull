import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LogIn from '../../components/log-in.component';
import {toggleLogInAction, signInAction} from './landing.action';

export class Landing extends React.Component
{
	render() {

		// console.log(this.props);

		if (this.props.userIdFromState) {
			return <Redirect to={`/main/${this.props.userIdFromState}`} />
		}

		this.toggleLogInFn = () => {
			toggleLogInAction(this.props.dispatch);
		}

		this.signInFn = (e) => {
			e.preventDefault();
			console.log(e);
			const email = document.getElementById("email").value;
			const password = document.getElementById("password").value;
			signInAction(this.props.dispatch, email, password);
		}

		return(
			<div className="landing-container">
				<section className="landing-image">
				</section>
				<aside className="log-in">
					<p className="section-header description">adopt-a-bull is an app that connects users with ador-a-bull, adopt-a-bull pitbulls.</p>
					<form className={this.props.signUp ? "sign-up" : "sign-in"}>
						<div className="radio-button-bar sign-up-sign-in">
							<div className="radio-button-wrapper radio-button-wrapper-alt">
								<input type="radio" name="log-in" id="btn-sign-up" className="radio-button" onClick={this.toggleLogInFn} defaultChecked={this.props.signUp} required/>
								<label htmlFor="btn-sign-up" className="radio-button-label radio-button-label-left">Sign Up</label>
							</div>
							<div className="radio-button-wrapper radio-button-wrapper-alt">
								<input type="radio" name="log-in" id="btn-sign-in" className="radio-button" onClick={this.toggleLogInFn} defaultChecked={!this.props.signUp} required/>
								<label htmlFor="btn-sign-in" className="radio-button-label radio-button-label-right">Sign In</label>
							</div>
						</div>
						<div className="form-input">
							<label htmlFor="email">email:</label>
							<input type="email" name="email" id="email" minLength="3" maxLength="64" required/>
						</div>
						<div className="form-input">
							<label htmlFor="password">password:</label>
							<input type="password" name="password" id="password" autoComplete="current-password" required/>
						</div>
						<LogIn logInProp={this.props.logInFromState} signInProp={this.signInFn} />
					</form>
				</aside>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		logInFromState: state._root.entries["0"][1].logInFromStore,
		userIdFromState: state._root.entries["0"][1].userIdFromStore
	}
}

export default connect(mapStateToProps) (Landing);