import React, {Fragment} from 'react';

export default function PuppyCardImage(props)
{
	return(
		<Fragment>
			<img src="https://raw.githubusercontent.com/kaseyllabelle/react-adopt-a-bull/wip/public/images/demo-pups/gus.jpg" className="puppy-card-thumbnail" alt="puppy"/>
			{/*
				TODO:
				// <img src="<%=data[0].photo%>" className="puppy-card-thumbnail" />
			*/}
		</ Fragment>
	)
}