import React from 'react';
import {connect} from 'react-redux';

import List from '../../containers/list/main.list';
import Main from '../../containers/main/main';
import Settings from '../../containers/settings/main.settings';

export class MainContainer extends React.Component
{
	render() {
		return(
			<div className="main-container">
				<List accountTypeProp={'adopter'} />
				<Main accountTypeProp={'adopter'} />
				<Settings accountTypeProp={'adopter'} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		
	}
}

export default connect(mapStateToProps) (MainContainer);