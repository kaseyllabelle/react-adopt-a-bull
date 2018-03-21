import React from 'react';
import {connect} from 'react-redux';

import LogIn from '../../components/log-in'
import {toggleLogIn} from './landing.actions'

export class Landing extends React.Component
{
	constructor(props){
		super(props);
	}

	render(){

		console.log(this.props);

		this.toggleLogIn = () => {
			toggleLogIn(this.props.dispatch);
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
								<input type="radio" name="log-in" id="btn-sign-up" className="radio-button" onClick={this.toggleLogIn} defaultChecked={this.props.signUp} required/>
								<label htmlFor="btn-sign-up" className="radio-button-label radio-button-label-left">Sign Up</label>
							</div>
							<div className="radio-button-wrapper radio-button-wrapper-alt">
								<input type="radio" name="log-in" id="btn-sign-in" className="radio-button" onClick={this.toggleLogIn} defaultChecked={!this.props.signUp} required/>
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
						<LogIn signUp={this.props.signUp} />
					</form>
				</aside>
			</div>
	    )
	}
}

const mapStateToProps = (state) => {
	return {
		signUp: state.signUp
	}
}

export default connect(mapStateToProps) (Landing);