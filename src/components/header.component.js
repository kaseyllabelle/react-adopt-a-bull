import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props)
{
	return(
		<header>
			<Link to="/">
				<img src="/images/adopt-a-bull-logo.png" alt="adopt-a-bull logo" />
			</Link>
		</header>
	)
}