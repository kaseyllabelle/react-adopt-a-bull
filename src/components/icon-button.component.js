import React, {Fragment} from 'react';

export default function IconButton(props)
{
	return(
		<Fragment>
			<i className="material-icons puppy-card-icon" onClick={(e) => {props.toggleInfoPropNested(e)}}>
				{props.toggleIconPropNested}
			</i>

			{/*
				TODO:
				discovery - info/close
				favorites - heart/x
				adoptabull - edit/x
				discovery nav - favorite/email/next
			*/}
			
		</Fragment>
	)
}