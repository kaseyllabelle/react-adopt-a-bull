import React from 'react';

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


		{/*
			<section className="main">
				<p className="section-header section-header-main">add puppy</p>
				<form>
					<div className="form-input">
						<label htmlFor="image">Upload profile photo</label>
						<input type="file" id="image" name="image" accept=".jpg, .jpeg, .png" required />
					</div>
					<div className="form-input">
						<label>name:</label>
						<input type="text" required />
					</div>
					<div className="form-input">
						<label>gender:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-gender" name="gender" value="female" required/>
								<label htmlFor="characteristic-gender" className="radio-button-label radio-button-label-left">female</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-gender" name="gender" value="male" required/>
								<label htmlFor="characteristic-gender" className="radio-button-label radio-button-label-right">male</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>age:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-age" name="age" value="puppy" required/>
								<label htmlFor="characteristic-age" className="radio-button-label radio-button-label-left">puppy</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-age" name="age" value="adult" required/>
								<label htmlFor="characteristic-age" className="radio-button-label">adult</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-age" name="age" value="senior" required/>
								<label htmlFor="characteristic-age" className="radio-button-label radio-button-label-right">senior</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>size:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-size" name="size" value="S" required/>
								<label htmlFor="characteristic-size" className="radio-button-label radio-button-label-left">S</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-size" name="size" value="M" required/>
								<label htmlFor="characteristic-size" className="radio-button-label">M</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-size" name="size" value="L" required/>
								<label htmlFor="characteristic-size" className="radio-button-label">L</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-size" name="size" value="XL" required/>
								<label htmlFor="characteristic-size" className="radio-button-label radio-button-label-right">XL</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>training:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-training" name="training" value="needs training"/>
								<label htmlFor="characteristic-training" className="radio-button-label radio-button-label-left">needs training</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-training" name="training" value="has basic training"/>
								<label htmlFor="characteristic-training" className="radio-button-label">has basic training</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-training" name="training" value="well trained"/>
								<label htmlFor="characteristic-training" className="radio-button-label radio-button-label-right">well trained</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>characteristics:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="house-broken"/>
								<label htmlFor="characteristic-house-broken" className="radio-button-label radio-button-label-left">house broken</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="crate-trained"/>
								<label htmlFor="characteristics" className="radio-button-label">crate-trained</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="neutered/spayed"/>
								<label htmlFor="characteristics" className="radio-button-label">neutered/spayed</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="vaccinated"/>
								<label htmlFor="characteristics" className="radio-button-label">vaccinated</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="micro-chipped"/>
								<label htmlFor="characteristics" className="radio-button-label">micro-chipped</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="special-needs"/>
								<label htmlFor="characteristics" className="radio-button-label radio-button-label-right">special needs</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>compatibility:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="apartments"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label radio-button-label-left">apartments</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="kids"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label">kids</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="kitties"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label">kitties</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="puppies"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label">puppies</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="seniors"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label radio-button-label-right">seniors</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>biography:</label>
						<input type="text"/>
					</div>
					<div className="form-input">
						<label>adoption fee:</label>
						<input type="text"/>
					</div>
					<button type="submit" className="button">Add Puppy</button>
				</form>
			</section>
*/}
		{/*
			TODO: 
			
			SHELTERS
			<section className="main">
				<p className="section-header section-header-main">add puppy</p>
				<form>
					<div className="form-input">
						<label htmlFor="image">Upload profile photo</label>
						<input type="file" id="image" name="image" accept=".jpg, .jpeg, .png" required />
					</div>
					<div className="form-input">
						<label>name:</label>
						<input type="text" required />
					</div>
					<div className="form-input">
						<label>gender:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-gender" name="gender" value="female" required/>
								<label htmlFor="characteristic-gender" className="radio-button-label radio-button-label-left">female</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-gender" name="gender" value="male" required/>
								<label htmlFor="characteristic-gender" className="radio-button-label radio-button-label-right">male</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>age:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-age" name="age" value="puppy" required/>
								<label htmlFor="characteristic-age" className="radio-button-label radio-button-label-left">puppy</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-age" name="age" value="adult" required/>
								<label htmlFor="characteristic-age" className="radio-button-label">adult</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-age" name="age" value="senior" required/>
								<label htmlFor="characteristic-age" className="radio-button-label radio-button-label-right">senior</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>size:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-size" name="size" value="S" required/>
								<label htmlFor="characteristic-size" className="radio-button-label radio-button-label-left">S</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-size" name="size" value="M" required/>
								<label htmlFor="characteristic-size" className="radio-button-label">M</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-size" name="size" value="L" required/>
								<label htmlFor="characteristic-size" className="radio-button-label">L</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-size" name="size" value="XL" required/>
								<label htmlFor="characteristic-size" className="radio-button-label radio-button-label-right">XL</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>training:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-training" name="training" value="needs training"/>
								<label htmlFor="characteristic-training" className="radio-button-label radio-button-label-left">needs training</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-training" name="training" value="has basic training"/>
								<label htmlFor="characteristic-training" className="radio-button-label">has basic training</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="radio" className="radio-button" id="characteristic-training" name="training" value="well trained"/>
								<label htmlFor="characteristic-training" className="radio-button-label radio-button-label-right">well trained</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>characteristics:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="house-broken"/>
								<label htmlFor="characteristic-house-broken" className="radio-button-label radio-button-label-left">house broken</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="crate-trained"/>
								<label htmlFor="characteristics" className="radio-button-label">crate-trained</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="neutered/spayed"/>
								<label htmlFor="characteristics" className="radio-button-label">neutered/spayed</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="vaccinated"/>
								<label htmlFor="characteristics" className="radio-button-label">vaccinated</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="micro-chipped"/>
								<label htmlFor="characteristics" className="radio-button-label">micro-chipped</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="special-needs"/>
								<label htmlFor="characteristics" className="radio-button-label radio-button-label-right">special needs</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>compatibility:</label>
						<div className="radio-button-bar">
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="apartments"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label radio-button-label-left">apartments</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="kids"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label">kids</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="kitties"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label">kitties</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="puppies"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label">puppies</label>
							</div>
							<div className="radio-button-wrapper">
								<input type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="seniors"/>
								<label htmlFor="characteristic-compatibility" className="radio-button-label radio-button-label-right">seniors</label>
							</div>
						</div>
					</div>
					<div className="form-input">
						<label>biography:</label>
						<input type="text">
					</div>
					<div className="form-input">
						<label>adoption fee:</label>
						<input type="text">
					</div>
					<button type="submit" className="button">Add Puppy</button>
				</form>
			</section>
		*/}
		</section>
	)
}