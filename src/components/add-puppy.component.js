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
			<div id="puppy-added"></div>
			<form className="form-add-puppy" id="add-puppy">
				<div className="form-input button-upload-photo-wrapper">
					<button className="form-input-label button-upload-photo">upload photo:</button>
					<img id="preview-puppy" className="preview-puppy" src="/images/placeholder.png" alt="preview puppy" />
					<input type="file" id="image" name="image" accept=".jpg, .jpeg, .png" required onChange={createDataURIFn} />
					<input type="hidden" id="puppyURI" name="photo" value="" />
				</div>
				<div className="form-input">
					<label className="form-input-label">name:</label>
					<input type="text" name="name" required />
				</div>
				<div className="form-input">
					<label className="form-input-label">gender:</label>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="female" name="gender" value="female" required />
						<label htmlFor="female">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							Female
						</label>
					</div>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="male" name="gender" value="male" required />
						<label htmlFor="male">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							Male
						</label>
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">age:</label>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="puppy" name="age" value="puppy" required />
						<label htmlFor="puppy">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							Puppy
						</label>
					</div>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="adult" name="age" value="adult" required />
						<label htmlFor="adult">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							Adult
						</label>
					</div>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="senior" name="age" value="senior" required />
						<label htmlFor="senior">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							Senior
						</label>
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">size:</label>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="s" name="size" value="S" required />
						<label htmlFor="s">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							Small
						</label>
					</div>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="m" name="size" value="M" required />
						<label htmlFor="m">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							Medium
						</label>
					</div>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="l" name="size" value="L" required />
						<label htmlFor="l">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							Large
						</label>
					</div>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="xl" name="size" value="XL" required />
						<label htmlFor="xl">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							Extra-Large
						</label>
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">training:</label>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="needs-training" name="training" value="needs training" />
						<label htmlFor="needs-training">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							needs training
						</label>
					</div>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="basic-training" name="training" value="has basic training" />
						<label htmlFor="basic-training">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							has basic training
						</label>
					</div>
					<div className="radio-wrapper">
						<input type="radio" style={{visibility: "hidden"}} id="well-trained" name="training" value="well trained" />
						<label htmlFor="well-trained">
							<div className="radio-icon-wrapper">
								<i className="material-icons unchecked">radio_button_unchecked</i>
								<i className="material-icons checked">radio_button_checked</i>
							</div>
							well trained
						</label>
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">characteristics:</label>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="house-broken" name="characteristics" value="house-broken" onChange={stringifyArray} />
						<label htmlFor="house-broken">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							house broken
						</label>
					</div>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="crate-trained" name="characteristics" value="crate-trained" onChange={stringifyArray} />
						<label htmlFor="crate-trained">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							crate-trained
						</label>
					</div>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="neutered-spayed" name="characteristics" value="neutered-spayed" onChange={stringifyArray} />
						<label htmlFor="neutered-spayed">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							neutered/spayed
						</label>
					</div>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="vaccinated" name="characteristics" value="vaccinated" onChange={stringifyArray} />
						<label htmlFor="vaccinated">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							vaccinated
						</label>
					</div>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="micro-chipped" name="characteristics" value="micro-chipped" onChange={stringifyArray} />
						<label htmlFor="micro-chipped">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							micro-chipped
						</label>
					</div>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="special-needs" name="characteristics" value="special-needs" onChange={stringifyArray} />
						<label htmlFor="special-needs">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							special needs
						</label>
					</div>
					<input type="hidden" id="characteristicsArrayStringId" name="characteristics" value="" />
				</div>
				<div className="form-input">
					<label className="form-input-label">compatibility:</label>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="apartments" name="compatibility" value="apartments" onChange={stringifyArray} />
						<label htmlFor="apartments">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							apartments
						</label>
					</div>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="kids" name="compatibility" value="kids" onChange={stringifyArray} />
						<label htmlFor="kids">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							kids
						</label>
					</div>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="kitties" name="compatibility" value="kitties" onChange={stringifyArray} />
						<label htmlFor="kitties">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							kitties
						</label>
					</div>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="puppies" name="compatibility" value="puppies" onChange={stringifyArray} />
						<label htmlFor="puppies">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							puppies
						</label>
					</div>
					<div className="checkbox-wrapper">
						<input type="checkbox" style={{visibility: "hidden"}} id="seniors" name="compatibility" value="seniors" onChange={stringifyArray} />
						<label htmlFor="seniors">
							<div className="checkbox-icon-wrapper">
								<i className="material-icons unchecked">check_box_outline_blank</i>
								<i className="material-icons checked">check_box</i>
							</div>
							seniors
						</label>
					</div>
					<input type="hidden" id="compatibility" name="compatibility" value="" />
				</div>
				{/*
				<div className="form-input">
					<label className="form-input-label">biography:</label>
					<input type="text" name="biography" />
				</div>
				*/}
				<div className="form-input">
					<label className="form-input-label">biography:</label>
					<textarea name="biography" rows="7" cols="30"></textarea>
				</div>
				<div className="form-input">
					<label className="form-input-label">adoption fee:</label>
					<input type="text" name="adoptionFee" />
				</div>
				<button type="submit" className="button" onClick={(e) => {props.addPuppyNestedProp(e)}}>Add Puppy</button>
			</form>
		</Fragment>
	)
}