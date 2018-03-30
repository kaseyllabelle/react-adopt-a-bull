import React, {Fragment} from 'react';

export default function PuppyCardImage(props)
{
	// let puppyImageProp;

	// if (Array.isArray(puppyImageProp)) {
	// 	puppyImageProp = props.puppyProp["0"] && props.puppyProp["0"].photo;
	// }
	// else {
	// 	puppyImageProp = props.puppyProp.photo;
	// }

	// console.log(puppyImageProp);
	
	return(
		<Fragment>
			{/*{puppyImageProp}*/}
			<img src="https://raw.githubusercontent.com/kaseyllabelle/react-adopt-a-bull/wip/public/images/demo-pups/gus.jpg" className="puppy-card-thumbnail" alt="puppy"/>
			{/*
				TODO:
				// <img src="<%=data[0].photo%>" className="puppy-card-thumbnail" />
			*/}
		</Fragment>
	)
}