import React, {Component, Fragment} from 'react';

import PuppyCardImage from '../components/puppy-card-image.component';
import PuppyCardInfo from '../components/puppy-card-info.component';
import PuppyCardInfoExpanded from '../components/puppy-card-info-expanded.component';

export default class PuppyCard extends Component
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
				return 'heart';
			}
		}

		return(
			<Fragment>
				<p className="section-header section-header-main">discover puppies</p>
				<div className="discovery-wrapper">
					<div className="puppy-card">
						<div className="puppy-card-container">
							<PuppyCardImage />
							<PuppyCardInfo toggleInfoProp={this.toggleInfoFn} toggleIconProp={this.toggleIconFn()} />
							{this.state.infoExpanded && <PuppyCardInfoExpanded />}
						</div>
					</div>
				</div>
				{/*
					TODO: fix puppy card
					// <p className="section-header section-header-main">discover puppies</p>
					// <div className="discovery-wrapper">
					// 	<div className="puppy-card">
					// 		<div className="puppy-card-container" data-puppyid="<%=data[0]._id%>">
					// 			<PuppyCardImage />
					// 			<PuppyCardInfo />
					// 			<PuppyCardInfoExpanded />
					// 		</div>
					// 	</div>
					// </div>
					// <div style="display: none;" className="hidden-puppy" data-nextpuppy="<%= data[2].nextPosition %>">
					// 	<img src="<%=data[1].photo%>" />
					// 	<p><%- JSON.stringify(data[1]) %></p>
					// </div>
				*/}
			</Fragment>
		)
	}
}