import React from 'react';

import PuppyCard from '../../components/puppy-card.component';

export default function List(props)
{
	// TODO: update puppyCardArray when we're getting content dynamically
	const puppyCardArray = [];

	return(
		<aside className="list">
			<p className="section-header">{props.accountTypeProp === 'adopter' ? 'favorites' : 'adopt-a-bull-puppies'}</p>
			<div className="puppies {props.accountTypeProp === 'adopter' ? 'favorite-puppies' : 'adopt-a-bull-puppies'}">
				<PuppyCard sectionProp={"favorites"}/>
			</div>
			{/*
				ADOPTERS EDIT
				// click heart icon
				// alert 'are you sure you want to remove [puppy name] from your favorites?'
				// confirm / cancel

				SHELTERS EDIT
				<div class="discovery-wrapper">
					<div class="puppy-card">
						<div class="puppy-card-container">
							<img src="/images/demo-pups/rhino.jpg" class="puppy-card-thumbnail" />
							<div class="puppy-card-info">
								<p class="puppy-card-name">Rhino</p>
								<i class="material-icons puppy-card-icon">cancel</i>
								<i class="material-icons puppy-card-icon">arrow_drop_down_circle</i>
							</div>
							<div class="puppy-card-expanded">
								<p class="name">Rhino</p>
								<p class="gender">male</p>
								<p class="age">senior</p>
								<p class="size">XL</p>
								<p class="training">well trained</p>
								<p class="characteristics">house broken, neutered/spayed, vaccinated, micro-chipped, special needs</p>
								<p class="compatibility">apartments, kids</p>
								<p class="biography">Rhino is a sweet pup. He's just about 10 years old. He loves face kisses, snuggles, and naps. He loves people, especially kids.</p>
								<p class="adoption-fee">$500</p>
								<p>Shelter info</p>
							</div>
						</div>
					</div>
				</div>
				<button type="submit" class="button">Remove Puppy</button>
			*/}
		</aside>
	)
}