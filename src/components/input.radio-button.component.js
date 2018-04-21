import React, {Fragment} from 'react';

export default function RadioButton(props)
{
	return(
		<Fragment>
			<i className="material-icons" onClick={(e) => {props.toggleInfoPropNested(e)}}>
				{props.toggleIconPropNested}
			</i>
			<i className="material-icons">radio_button_unchecked</i>
			<i className="material-icons">radio_button_checked</i>
		</Fragment>
	)
}