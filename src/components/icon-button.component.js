import React from 'react';

export default function IconButton(props)
{
	return(
		<div>
			<i className="material-icons">info</i>
			{/*
				TODO:
					swap info button for close button when card is expanded
					use for edit/save/remove buttons in list and settings
					use for favorite, email, and next icon buttons in discovery section
				<i className="material-icons puppy-card-icon">info</i>
			*/}
		</div>
	)
}