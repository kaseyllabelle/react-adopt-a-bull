import React from 'react';

import IconButton from '../components/icon-button.component';

export default function PuppyCardInfo(props)
{
	// console.log(props);
	return(
		<div className="puppy-card-info">
			<p className="puppy-card-name">Gus</p>
			<IconButton toggleInfoPropNested={props.toggleInfoProp} toggleIconPropNested={props.toggleIconProp} />
			{/*
				TODO:
				// <div className="puppy-card-info">
				// 	<p className="puppy-card-name"><%=data[0].name%></p>
				// 	<i className="material-icons puppy-card-icon">info</i>
				// </div>
			*/}
		</div>
	)
}