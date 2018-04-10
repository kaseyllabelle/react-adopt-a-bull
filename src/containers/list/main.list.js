import React from 'react';

import PuppyCard from '../../components/puppy-card.component';

export default function List(props)
{
	const puppyCardsArray = props.favoritedPuppiesProp || props.adoptabullPuppiesProp || [];

	const puppyCards = puppyCardsArray.map((puppy) => {
		return <PuppyCard key={puppy._id} sectionProp={"favorites"} puppyProp={puppy}/>
	})

	return(
		<aside className="list">
			<p className="section-header">{props.accountTypeProp === 'adopter' ? 'favorites' : 'adopt-a-bull-puppies'}</p>
			<div className="puppies {props.accountTypeProp === 'adopter' ? 'favorite-puppies' : 'adopt-a-bull-puppies'}">
				{puppyCards}
			</div>
			
			{/*
				TODO:

				ADOPTERS EDIT
				// click edit
				// click heart icon
				// alert 'are you sure you want to remove [puppy name] from your favorites?' - confirm / cancel
				// click Save

				SHELTERS EDIT
				// click edit
				// click x icon
				// alert 'are you sure you want to delete [puppy name] from your adopt-a-bull puppies?' - confirm / cancel
				// click Save
			*/}
			{/*<button type="submit" className="button">Edit</button>*/}
			{/*<button type="submit" className="button">Save</button>*/}
			
		</aside>
	)
}