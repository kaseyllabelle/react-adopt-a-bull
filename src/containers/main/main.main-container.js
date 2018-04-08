import React from 'react';
import {connect} from 'react-redux';

import List from '../../containers/list/main.list';
import Main from '../../containers/main/main';
import Settings from '../../containers/settings/main.settings';
import {getPuppyAction, addPuppyAction, favoritePuppyAction, renderFavoritePuppiesAction} from './main.main-container.action';

export class MainContainer extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {};
		this.state.accountTypeComponentProp = localStorage.getItem("adopterId") !== "null" ? "adopter" : "shelter";
		this.favoritePuppyFn = this.favoritePuppyFn.bind(this);
		this.getNextPuppyFn = this.getNextPuppyFn.bind(this);
		this.addPuppyFn = this.addPuppyFn.bind(this);
	}

	componentDidMount() {
		if(localStorage.getItem("adopterId") !== "null"){
			console.log(localStorage.getItem("adopterId").length);
			getPuppyAction(this.props.dispatch);
			renderFavoritePuppiesAction(this.props.dispatch);
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
		puppyJSON = (JSON.stringify(puppyJSON));
		addPuppyAction(this.props.dispatch, puppyJSON);
	}

	favoritePuppyFn() {
		let puppyIdProp = this.props.puppyFromState[0]._id; 
		favoritePuppyAction(this.props.dispatch, puppyIdProp);
		this.getNextPuppyFn();
	}

	getNextPuppyFn() {
		getPuppyAction(this.props.dispatch, this.props.puppyNum);
	}

	render() {

		const shelterEmail = (this.props.puppyFromState["0"] && this.props.puppyFromState["0"].shelterId.email) || "";

		return(
			<div className="main-container">
				<List 
					accountTypeProp={this.state.accountTypeComponentProp} 
					favoritedPuppiesProp={this.props.favoritedPuppiesFromState} 
				/>
				{!this.props.noMorePuppiesFromState && 
					<Main 
						accountTypeProp={this.state.accountTypeComponentProp} 
						nextPuppyProp={this.getNextPuppyFn} 
						emailShelterProp={shelterEmail} 
						favoritePuppyProp={this.favoritePuppyFn}
						addPuppyProp={this.addPuppyFn}
					/>
				}
				{this.props.noMorePuppiesFromState && 
					<div className="discovery-wrapper">
						There are no more adopt-a-bull puppies around you.<br/>
						Try adjusting your discovery settings.
					</div>
				}
				<Settings accountTypeProp={this.state.accountTypeComponentProp} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		puppyNum: state._root.entries[1][1].puppyNumFromStore,
		puppyFromState: state._root.entries[1][1].puppyFromStore,
		favoritedPuppiesFromState: state._root.entries[1][1].favoritePuppiesFromStore.favoritePuppies,
		noMorePuppiesFromState: state._root.entries[1][1].noMorePuppiesFromStore
	}
}

export default connect(mapStateToProps) (MainContainer);