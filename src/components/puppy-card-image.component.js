import React, {Fragment} from 'react';

export default function PuppyCardImage(props)
{
	let puppyImageProp;

	if (Array.isArray(props.puppyProp)) {
		puppyImageProp = props.puppyProp["0"] && props.puppyProp["0"].photo;
	}
	else {
		puppyImageProp = props.puppyProp.photo;
	}

	console.log(puppyImageProp);
	
	return(
		<Fragment>
			<img src={puppyImageProp} className="puppy-card-thumbnail" alt="puppy"/>
			{/*
				TODO:
				// <img src="<%=data[0].photo%>" className="puppy-card-thumbnail" />
			*/}
		</Fragment>
	)
}