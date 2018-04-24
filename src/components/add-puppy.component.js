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
					<div className="radio-button-bar">
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="female" name="gender" value="female" required />
							<label htmlFor="female" className="radio-button-label radio-button-label-left">female</label>
						</div>
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="male" name="gender" value="male" required />
							<label htmlFor="male" className="radio-button-label radio-button-label-right">male</label>
						</div>
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">age:</label>
					<div className="radio-button-bar">
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="puppy" name="age" value="puppy" required />
							<label htmlFor="puppy" className="radio-button-label radio-button-label-left">puppy</label>
						</div>
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="adult" name="age" value="adult" required />
							<label htmlFor="adult" className="radio-button-label radio-button-label-center">adult</label>
						</div>
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="senior" name="age" value="senior" required />
							<label htmlFor="senior" className="radio-button-label radio-button-label-right">senior</label>
						</div>
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">size:</label>
					<div className="radio-button-bar">
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="s" name="size" value="S" required />
							<label htmlFor="s" className="radio-button-label radio-button-label-left">S</label>
						</div>
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="m" name="size" value="M" required />
							<label htmlFor="m" className="radio-button-label radio-button-label-center">M</label>
						</div>
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="l" name="size" value="L" required />
							<label htmlFor="l" className="radio-button-label radio-button-label-center">L</label>
						</div>
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="xl" name="size" value="XL" required />
							<label htmlFor="xl" className="radio-button-label radio-button-label-right">XL</label>
						</div>
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">training:</label>
					<div className="radio-button-bar">
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="needs-training" name="training" value="needs training" />
							<label htmlFor="needs-training" className="radio-button-label radio-button-label-left">needs training</label>
						</div>
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="basic-training" name="training" value="has basic training" />
							<label htmlFor="basic-training" className="radio-button-label radio-button-label-center">has basic training</label>
						</div>
						<div className="radio-button-wrapper">
							<input type="radio" className="radio-button" id="well-trained" name="training" value="well trained" />
							<label htmlFor="well-trained" className="radio-button-label radio-button-label-right">well trained</label>
						</div>
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">characteristics:</label>
					<div className="">
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="house-broken" name="characteristics" value="house-broken" onChange={stringifyArray} />
							<label htmlFor="house-broken" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								house broken
							</label>
						</div>
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="crate-trained" name="characteristics" value="crate-trained" onChange={stringifyArray} />
							<label htmlFor="crate-trained" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								crate-trained
							</label>
						</div>
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="neutered-spayed" name="characteristics" value="neutered-spayed" onChange={stringifyArray} />
							<label htmlFor="neutered-spayed" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								neutered/spayed
							</label>
						</div>
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="vaccinated" name="characteristics" value="vaccinated" onChange={stringifyArray} />
							<label htmlFor="vaccinated" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								vaccinated
							</label>
						</div>
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="micro-chipped" name="characteristics" value="micro-chipped" onChange={stringifyArray} />
							<label htmlFor="micro-chipped" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								micro-chipped
							</label>
						</div>
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="special-needs" name="characteristics" value="special-needs" onChange={stringifyArray} />
							<label htmlFor="special-needs" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								special needs
							</label>
						</div>
						<input type="hidden" id="characteristicsArrayStringId" name="characteristics" value="" />
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">compatibility:</label>
					<div className="">
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="apartments" name="compatibility" value="apartments" onChange={stringifyArray} />
							<label htmlFor="apartments" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								apartments
							</label>
						</div>
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="kids" name="compatibility" value="kids" onChange={stringifyArray} />
							<label htmlFor="kids" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								kids
							</label>
						</div>
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="kitties" name="compatibility" value="kitties" onChange={stringifyArray} />
							<label htmlFor="kitties" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								kitties
							</label>
						</div>
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="puppies" name="compatibility" value="puppies" onChange={stringifyArray} />
							<label htmlFor="puppies" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								puppies
							</label>
						</div>
						<div className="checkbox-wrapper">
							<input type="checkbox" style={{visibility: "hidden"}} className="" id="seniors" name="compatibility" value="seniors" onChange={stringifyArray} />
							<label htmlFor="seniors" className="">
								<div className="checkbox-icon-wrapper">
									<i className="material-icons unchecked">check_box_outline_blank</i>
									<i className="material-icons checked">check_box</i>
								</div>
								seniors
							</label>
						</div>
						<input type="hidden" id="compatibility" name="compatibility" value="" />
					</div>
				</div>
				<div className="form-input">
					<label className="form-input-label">biography:</label>
					<input type="text" name="biography" />
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