import React, {Fragment} from 'react';

export default function AddPuppy(props)
{
	const createDataURIFn = (e) => {
		const file = (e.currentTarget.files[0]);
		const fileReader = new FileReader();
		if(file.size > 500000) {
			alert("File size must be less than .5 MB");
			return false
		}
		fileReader.addEventListener("load", () => {
			document.getElementById("preview-puppy").src = fileReader.result;
			document.getElementById("puppyURI").value = fileReader.result;
		}, false);
		if(file) {
			fileReader.readAsDataURL(file);
		}
	}

	const stringifyArray = (e) => {
		let characteristicsArrayString = "";
		let compatibilityArrayString = "";
		const characteristics = document.querySelectorAll(`input[name="characteristics"]:checked`);
		const compatibility = document.querySelectorAll(`input[name="compatibility"]:checked`);
		console.log(characteristics, compatibility);
		for(let i=0; i<characteristics.length; i++) {
			characteristicsArrayString += "," + characteristics[i].value;
		}
		for(let i=0; i<compatibility.length; i++) {
			compatibilityArrayString += "," + compatibility[i].value;
		}
		document.getElementById("characteristicsArrayStringId").value = characteristicsArrayString.replace(",", "");
		document.getElementById("compatibility").value = compatibilityArrayString.replace(",", "");
	}

	return(
		<Fragment>
			<p className="section-header section-header-main">add puppy</p>
			<form id="add-puppy">
				<div className="form-input">
					<img id="preview-puppy" src="/images/placeholder.png" alt="preview puppy"/>
					<label htmlFor="image">Upload profile photo</label>
					<input type="file" onChange={createDataURIFn} id="image" name="image" accept=".jpg, .jpeg, .png" required />
					<input type="hidden" id="puppyURI" name="photo" value="" />
				</div>
				<div className="form-input">
					<label>name:</label>
					<input type="text" name="name" required />
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
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="house-broken"/>
							<label htmlFor="characteristic-house-broken" className="radio-button-label radio-button-label-left">house broken</label>
						</div>
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="crate-trained"/>
							<label htmlFor="characteristics" className="radio-button-label">crate-trained</label>
						</div>
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="neutered/spayed"/>
							<label htmlFor="characteristics" className="radio-button-label">neutered/spayed</label>
						</div>
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="vaccinated"/>
							<label htmlFor="characteristics" className="radio-button-label">vaccinated</label>
						</div>
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="micro-chipped"/>
							<label htmlFor="characteristics" className="radio-button-label">micro-chipped</label>
						</div>
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristics" name="characteristics" value="special-needs"/>
							<label htmlFor="characteristics" className="radio-button-label radio-button-label-right">special needs</label>
						</div>
						<input type="hidden" id="characteristicsArrayStringId" name="characteristics" value="" />
					</div>
				</div>
				<div className="form-input">
					<label>compatibility:</label>
					<div className="radio-button-bar">
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="apartments"/>
							<label htmlFor="characteristic-compatibility" className="radio-button-label radio-button-label-left">apartments</label>
						</div>
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="kids"/>
							<label htmlFor="characteristic-compatibility" className="radio-button-label">kids</label>
						</div>
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="kitties"/>
							<label htmlFor="characteristic-compatibility" className="radio-button-label">kitties</label>
						</div>
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="puppies"/>
							<label htmlFor="characteristic-compatibility" className="radio-button-label">puppies</label>
						</div>
						<div className="radio-button-wrapper">
							<input onChange={stringifyArray} type="checkbox" className="radio-button" id="characteristic-compatibility" name="compatibility" value="seniors"/>
							<label htmlFor="characteristic-compatibility" className="radio-button-label radio-button-label-right">seniors</label>
						</div>
						<input type="hidden" id="compatibility" name="compatibility" value="" />
					</div>
				</div>
				<div className="form-input">
					<label>biography:</label>
					<input name="biography" type="text"/>
				</div>
				<div className="form-input">
					<label>adoption fee:</label>
					<input name="adoptionFee" type="text"/>
				</div>
				<button type="submit" className="button" onClick={(e) => {props.addPuppyNestedProp(e)}}>Add Puppy</button>
			</form>
		</Fragment>
	)
}