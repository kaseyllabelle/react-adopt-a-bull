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
		this.state = {
			puppyNum: 0
		}
		this.favoritePuppyFn = this.favoritePuppyFn.bind(this);
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
		this.setState({
			puppyNum: this.state.puppyNum++
		})
		getPuppyAction(this.props.dispatch, this.state.puppyNum);
	}

	render() {
		return(
			<div className="main-container">
				{this.props.favoritedPuppiesFromState && <List accountTypeProp={'adopter'} favoritedPuppiesProp={this.props.favoritedPuppiesFromState} />}
				<Main accountTypeProp={'adopter'} favoritePuppyProp={this.favoritePuppyFn} />
				<Settings accountTypeProp={'adopter'} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		puppyFromState: state._root.entries[1][1].puppyFromStore,
		favoritedPuppiesFromState: state._root.entries[1][1].favoritePuppiesFromStore.favoritePuppies
	}
}

export default connect(mapStateToProps) (MainContainer);