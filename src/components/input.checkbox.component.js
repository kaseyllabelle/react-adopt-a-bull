import React, {Fragment} from 'react';

export default function Checkbox(props)
{
	return(
		<Fragment>
			<i className="material-icons" onClick={(e) => {props.toggleInfoPropNested(e)}}>
				{props.toggleIconPropNested}
			</i>

			<i className="material-icons">check_box_outline_blank</i>
			<i className="material-icons">check_box</i>			
		</Fragment>
	)
}