import React, {Fragment} from 'react';

export default function IconButton(props)
{
	return(
		<Fragment>
			<i className="material-icons" onClick={(e) => {props.toggleInfoPropNested(e)}}>
				{props.toggleIconPropNested}
			</i>
			{/*
				TODO:
					swap info button for close button when card is expanded
					use for edit/save/remove buttons in list and settings
					use for favorite, email, and next icon buttons in discovery section
				<i className="material-icons puppy-card-icon">info</i>
			*/}
		</Fragment>
	)
}