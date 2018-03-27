import React from 'react';

import List from '../../containers/list/main.list';
import Main from '../../containers/main/main';
import Settings from '../../containers/settings/main.settings';

export default function MainContainer(props)
{
	return(
		<div className="main-container">
			<List />
			<Main />
			<Settings />
		</div>
	)
}