import React from 'react';

export default function SkeletonStatelessComponent(props)
{
	return(
		<div>
			<p>Nothing special here. Just your good ol' fahioned string literal</p>
			<p>And a prop: <u>{props.anotherPropExample}</u></p>
		</div>
	)
}