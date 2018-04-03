import React, {Fragment} from 'react';

export default function PuppyCardImage(props)
{
	// console.log(puppyImageProp);
	
	let puppyImageProp;

	if (Array.isArray(props.puppyProp)) {
		puppyImageProp = props.puppyProp["0"] && props.puppyProp["0"].photo;
	}
	else {
		puppyImageProp = props.puppyProp.photo;
	}

	return(
		<Fragment>
			<img src={puppyImageProp} className="puppy-card-thumbnail" alt="puppy"/>
		</Fragment>
	)
}