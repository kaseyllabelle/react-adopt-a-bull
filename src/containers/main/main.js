import React from 'react';
import {Link} from 'react-router-dom';

import PuppyCard from '../../components/puppy-card.component';

export default function Main(props)
{
	return(
		<section className="main js-main-adopters">
			<div className="main-inner">
				<div className="js-puppy-card">
					<p className="section-header section-header-main">discover puppies</p>
					<div className="discovery-wrapper">
						<PuppyCard sectionProp="main"/>
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
		{/*
			TODO: 
			
			SHELTERS
			<section class="main">
				<p class="section-header section-header-main">add puppy</p>
				<form>
					<div class="form-input">
						<label for="image">Upload profile photo</label>
						<input type="file" id="image" name="image" accept=".jpg, .jpeg, .png" required />
					</div>
					<div class="form-input">
						<label>name:</label>
						<input type="text" required />
					</div>
					<div class="form-input">
						<label>gender:</label>
						<div class="radio-button-bar">
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-gender" name="gender" value="female" required/>
								<label for="characteristic-gender" class="radio-button-label radio-button-label-left">female</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-gender" name="gender" value="male" required/>
								<label for="characteristic-gender" class="radio-button-label radio-button-label-right">male</label>
							</div>
						</div>
					</div>
					<div class="form-input">
						<label>age:</label>
						<div class="radio-button-bar">
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-age" name="age" value="puppy" required/>
								<label for="characteristic-age" class="radio-button-label radio-button-label-left">puppy</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-age" name="age" value="adult" required/>
								<label for="characteristic-age" class="radio-button-label">adult</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-age" name="age" value="senior" required/>
								<label for="characteristic-age" class="radio-button-label radio-button-label-right">senior</label>
							</div>
						</div>
					</div>
					<div class="form-input">
						<label>size:</label>
						<div class="radio-button-bar">
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-size" name="size" value="S" required/>
								<label for="characteristic-size" class="radio-button-label radio-button-label-left">S</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-size" name="size" value="M" required/>
								<label for="characteristic-size" class="radio-button-label">M</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-size" name="size" value="L" required/>
								<label for="characteristic-size" class="radio-button-label">L</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-size" name="size" value="XL" required/>
								<label for="characteristic-size" class="radio-button-label radio-button-label-right">XL</label>
							</div>
						</div>
					</div>
					<div class="form-input">
						<label>training:</label>
						<div class="radio-button-bar">
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-training" name="training" value="needs training"/>
								<label for="characteristic-training" class="radio-button-label radio-button-label-left">needs training</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-training" name="training" value="has basic training"/>
								<label for="characteristic-training" class="radio-button-label">has basic training</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="radio" class="radio-button" id="characteristic-training" name="training" value="well trained"/>
								<label for="characteristic-training" class="radio-button-label radio-button-label-right">well trained</label>
							</div>
						</div>
					</div>
					<div class="form-input">
						<label>characteristics:</label>
						<div class="radio-button-bar">
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristics" name="characteristics" value="house-broken"/>
								<label for="characteristic-house-broken" class="radio-button-label radio-button-label-left">house broken</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristics" name="characteristics" value="crate-trained"/>
								<label for="characteristics" class="radio-button-label">crate-trained</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristics" name="characteristics" value="neutered/spayed"/>
								<label for="characteristics" class="radio-button-label">neutered/spayed</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristics" name="characteristics" value="vaccinated"/>
								<label for="characteristics" class="radio-button-label">vaccinated</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristics" name="characteristics" value="micro-chipped"/>
								<label for="characteristics" class="radio-button-label">micro-chipped</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristics" name="characteristics" value="special-needs"/>
								<label for="characteristics" class="radio-button-label radio-button-label-right">special needs</label>
							</div>
						</div>
					</div>
					<div class="form-input">
						<label>compatibility:</label>
						<div class="radio-button-bar">
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristic-compatibility" name="compatibility" value="apartments"/>
								<label for="characteristic-compatibility" class="radio-button-label radio-button-label-left">apartments</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristic-compatibility" name="compatibility" value="kids"/>
								<label for="characteristic-compatibility" class="radio-button-label">kids</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristic-compatibility" name="compatibility" value="kitties"/>
								<label for="characteristic-compatibility" class="radio-button-label">kitties</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristic-compatibility" name="compatibility" value="puppies"/>
								<label for="characteristic-compatibility" class="radio-button-label">puppies</label>
							</div>
							<div class="radio-button-wrapper">
								<input type="checkbox" class="radio-button" id="characteristic-compatibility" name="compatibility" value="seniors"/>
								<label for="characteristic-compatibility" class="radio-button-label radio-button-label-right">seniors</label>
							</div>
						</div>
					</div>
					<div class="form-input">
						<label>biography:</label>
						<input type="text">
					</div>
					<div class="form-input">
						<label>adoption fee:</label>
						<input type="text">
					</div>
					<button type="submit" class="button">Add Puppy</button>
				</form>
			</section>
		*/}
		</section>
	)
}