import React from 'react';

import PuppyCardImage from '../components/puppy-card-image.component';
import PuppyCardInfo from '../components/puppy-card-info.component';
import PuppyCardInfoExpanded from '../components/puppy-card-info-expanded.component';

export default function PuppyCard(props)
{
	return(
		<div>
			<p>puppy card component</p>
			<PuppyCardImage />
			<PuppyCardInfo />
			<PuppyCardInfoExpanded />
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
		</div>
	)
}