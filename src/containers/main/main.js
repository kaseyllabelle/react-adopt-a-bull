import React from 'react';

import PuppyCard from '../../components/puppy-card.component';
import AddPuppy from '../../components/add-puppy.component';

export default function Main(props)
{
	return(
		<section className="main">
			{props.accountTypeProp === "shelter" && <AddPuppy/>}
			{props.accountTypeProp === "adopter" && 
				<div className="main-inner">
					<div className="js-puppy-card">
						<p className="section-header section-header-main">discover puppies</p>
						<div className="discovery-wrapper">
							<PuppyCard sectionProp="main"/>
							{/*
								TODO: put no more puppies here instead of in main container
							*/}
						</div>
					</div>
					<div className="bottom-nav">
						{/*
							TODO: use icon button component for these icon buttons
						*/}
						<a className="icon-wrapper next" onClick={() => {props.nextPuppyProp()}}>
							<i className="material-icons icon-next">close</i>
						</a>
						<a href={"mailto:" + props.emailShelterProp} className="icon-wrapper mail">
							<i className="material-icons icon-mail">mail_outline</i>
						</a>
						<a className="icon-wrapper favorite" onClick={() => {props.favoritePuppyProp()}}>
							<i className="material-icons icon-favorite">favorite_outline</i>
						</a>
					</div>
				</div>
			}
		</section>
	)
}