import React from 'react';
import {connect} from 'react-redux';

import List from '../../containers/list/main.list';
import Main from '../../containers/main/main';
import Settings from '../../containers/settings/main.settings';
import {getPuppyAction, addPuppyAction, favoritePuppyAction, renderFavoritePuppiesAction, renderAdoptabullPuppiesAction, shelterProfileAction, getShelterAction, resetPasswordAction, deactivateAccountAction} from './main.main-container.action';

export class MainContainer extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {};
		this.state.accountTypeComponentProp = localStorage.getItem("adopterId") !== "null" ? "adopter" : "shelter";
		this.state.editShelterProfileOverride = false;
		this.editShelterProfileFn = this.editShelterProfileFn.bind(this);
		this.addPuppyFn = this.addPuppyFn.bind(this);
		this.getNextPuppyFn = this.getNextPuppyFn.bind(this);
		this.favoritePuppyFn = this.favoritePuppyFn.bind(this);
		this.shelterProfileFn = this.shelterProfileFn.bind(this);
		this.resetPasswordFn = this.resetPasswordFn.bind(this);
	}

	componentDidMount() {
		if(localStorage.getItem("adopterId") !== "null") {
			getPuppyAction(this.props.dispatch);
			renderFavoritePuppiesAction(this.props.dispatch);
		}
		else {
			renderAdoptabullPuppiesAction(this.props.dispatch);
			getShelterAction(this.props.dispatch);
		}
	}

	addPuppyFn(e) {
		e.preventDefault();
		const addPuppyForm = document.getElementById("add-puppy");
		const addPuppyFormData = new FormData(addPuppyForm);
		let puppyJSON = {};
		for(var pair of addPuppyFormData.entries()) { 
			puppyJSON[pair[0]] = pair[1];
		}
		addPuppyAction(this.props.dispatch, puppyJSON);
	}

	getNextPuppyFn() {
		getPuppyAction(this.props.dispatch, this.props.puppyNum);
	}

	favoritePuppyFn() {
		let puppyIdProp = this.props.puppyFromState[0]._id; 
		favoritePuppyAction(this.props.dispatch, puppyIdProp);
		this.getNextPuppyFn();
	}

	shelterProfileFn(e) {
		e.preventDefault();
		const shelterProfileFormData = new FormData(e.currentTarget);
		let shelterProfileJSON = {};
		for(var pair of shelterProfileFormData.entries()) { 
			shelterProfileJSON[pair[0]] = pair[1];
		}
		shelterProfileAction(this.props.dispatch, shelterProfileJSON);
		this.setState({
			editShelterProfileOverride: false
		})
	}

	editShelterProfileFn() {
		this.setState({
			editShelterProfileOverride: true
		});
	}

	resetPasswordFn() {
		resetPasswordAction(this.props.dispatch, document.getElementById("oldPassword").value, document.getElementById("newPassword").value);
	}

	deactivateAccountFn() {
		deactivateAccountAction();
	}

	render() {
		const shelterEmail = (this.props.puppyFromState["0"] && this.props.puppyFromState["0"].shelterId.email) || "";

		return(
			<div className="main-container">
				<List 
					accountTypeProp={this.state.accountTypeComponentProp} 
					favoritedPuppiesProp={this.props.favoritedPuppiesFromState} 
					adoptabullPuppiesProp={this.props.adoptabullPuppiesFromState} 
				/>
				{!this.props.noMorePuppiesFromState && 
					<Main 
						accountTypeProp={this.state.accountTypeComponentProp} 
						addPuppyProp={this.addPuppyFn} 
						nextPuppyProp={this.getNextPuppyFn} 
						emailShelterProp={shelterEmail} 
						favoritePuppyProp={this.favoritePuppyFn}
					/>
				}
				{this.props.noMorePuppiesFromState && 
					<div className="discovery-wrapper">
						There are no more adopt-a-bull puppies around you.<br/>
						Try adjusting your discovery settings.
					</div>
				}
				<Settings 
					accountTypeProp={this.state.accountTypeComponentProp} 
					shelterProfileProp={this.shelterProfileFn}
					shelterProfileSettingsProp={this.props.shelterProfileFromState}
					editShelterOverrideBoolean={this.state.editShelterProfileOverride}
					editShelterProfileOverrideProp={this.editShelterProfileFn}
					resetPasswordProp={this.resetPasswordFn} 
					deactivateAccountProp={this.deactivateAccountFn} 
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		puppyNum: state._root.entries[1][1].puppyNumFromStore,
		puppyFromState: state._root.entries[1][1].puppyFromStore,
		favoritedPuppiesFromState: state._root.entries[1][1].favoritePuppiesFromStore.favoritePuppies,
		adoptabullPuppiesFromState: state._root.entries[1][1].adoptabullPuppiesFromStore.adoptabullPuppies,
		noMorePuppiesFromState: state._root.entries[1][1].noMorePuppiesFromStore,
		shelterProfileFromState: state._root.entries[1][1].shelterProfileFromStore
	}
}

export default connect(mapStateToProps) (MainContainer);