import React from 'react';
import {connect} from 'react-redux';

import List from '../../containers/list/main.list';
import Main from '../../containers/main/main';
import Settings from '../../containers/settings/main.settings';
import {getPuppyAction, favoritePuppyAction, renderFavoritePuppiesAction} from './main.main-container.action';

export class MainContainer extends React.Component
{
	constructor(props) {
		super(props);
		this.favoritePuppyFn = this.favoritePuppyFn.bind(this);
		this.getNextPuppyFn = this.getNextPuppyFn.bind(this);
	}

	componentDidMount() {
		// TODO:
		// update to use url
		// if adopter or shelter
		getPuppyAction(this.props.dispatch);
		renderFavoritePuppiesAction(this.props.dispatch);
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
				{this.props.favoritedPuppiesFromState && <List accountTypeProp={'adopter'} favoritedPuppiesProp={this.props.favoritedPuppiesFromState} />}
				{!this.props.noMorePuppiesFromState && <Main accountTypeProp={'adopter'} nextPuppyProp={this.getNextPuppyFn} emailShelterProp={shelterEmail} favoritePuppyProp={this.favoritePuppyFn} />}
				{this.props.noMorePuppiesFromState && <div>No more puppies</div>}
				<Settings accountTypeProp={'adopter'} />
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