import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import PuppyCardImage from '../components/puppy-card-image.component';
import PuppyCardInfo from '../components/puppy-card-info.component';
import PuppyCardInfoExpanded from '../components/puppy-card-info-expanded.component';

export class PuppyCard extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			infoExpanded: false
		}
	}

	render() {

		this.toggleInfoFn = (e) => {
			this.setState({
				infoExpanded: !this.state.infoExpanded
			})
		}

		this.toggleIconFn = () => {
			if(this.props.sectionProp === 'main') {
				return this.state.infoExpanded ? 'close' : 'info';
			}
			if(this.props.sectionProp === 'favorites') {
				return 'favorite';
			}
		}

		const puppyInfo = this.props.sectionProp === 'main' ? this.props.puppyFromState : this.props.puppyProp;

		// console.log(this.props.puppyFromState[0] && this.props.puppyFromState[0].name);

		return(
			<Fragment>
				<div className="puppy-card">
					<div className="puppy-card-container">
						<PuppyCardImage />
						<PuppyCardInfo toggleInfoProp={this.toggleInfoFn} toggleIconProp={this.toggleIconFn()} puppyProp={puppyInfo} />
						{this.state.infoExpanded && this.props.sectionProp === 'main' && <PuppyCardInfoExpanded puppyProp={this.props.puppyFromState} />}
					</div>
				</div>
				{/*
					TODO: fix puppy card
					// 	<div className="puppy-card">
					// 		<div className="puppy-card-container" data-puppyid="<%=data[0]._id%>">
					// 			<PuppyCardImage />
					// 			<PuppyCardInfo />
					// 			<PuppyCardInfoExpanded />
					// 		</div>
					// 	</div>
					// <div style="display: none;" className="hidden-puppy" data-nextpuppy="<%= data[2].nextPosition %>">
					// 	<img src="<%=data[1].photo%>" />
					// 	<p><%- JSON.stringify(data[1]) %></p>
					// </div>
				*/}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		puppyFromState: state._root.entries[1][1].puppyFromStore
	}
}

export default connect(mapStateToProps) (PuppyCard);