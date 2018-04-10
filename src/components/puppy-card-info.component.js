import React from 'react';

import IconButton from '../components/icon-button.component';

export default function PuppyCardInfo(props)
{
	let puppyNameProp;

	if (Array.isArray(props.puppyProp)) {
		puppyNameProp = props.puppyProp["0"] && props.puppyProp["0"].name;
	}
	else {
		puppyNameProp = props.puppyProp.name;
	}
	
	return(
		<div className="puppy-card-info">
			<p className="puppy-card-name">{puppyNameProp}</p>
			<IconButton toggleInfoPropNested={props.toggleInfoProp} toggleIconPropNested={props.toggleIconProp} />
		</div>
	)
}