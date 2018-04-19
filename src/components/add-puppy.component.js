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
			<form id="add-puppy" className="form-add-puppy">
				<div className="upload-btn-wrapper">
					<img id="preview-puppy" className="preview-puppy" src="/images/placeholder.png" alt="preview puppy"/>
					<button class="btn"><i className="material-icons">add_a_photo</i> upload photo</button>
					<input type="file" onChange={createDataURIFn} id="image" name="image" accept=".jpg, .jpeg, .png" required />
					<input type="hidden" id="puppyURI" name="photo" value="" />
				</div>
				{/*<div className="form-input">
					<img id="preview-puppy" className="preview-puppy" src="/images/placeholder.png" alt="preview puppy"/>
					<label htmlFor="image"><i className="material-icons">add_a_photo</i> Upload photo: </label>
					<input type="file" onChange={createDataURIFn} id="image" name="image" accept=".jpg, .jpeg, .png" required />
					<input type="hidden" id="puppyURI" name="photo" value="" />
				</div>*/}
				<div className="form-input">
					<label>name:</label>
					<input type="text" name="name" required />
				</div>
				<div className="form-input">
					<label>gender:</label>
					<div className="">
						<div className="">
							<input type="radio" className="" id="characteristic-gender" name="gender" value="female" required/>
							<label htmlFor="characteristic-gender" className="">female</label>
						</div>
						<div className="">
							<input type="radio" className="" id="characteristic-gender" name="gender" value="male" required/>
							<label htmlFor="characteristic-gender" className="">male</label>
						</div>
					</div>
				</div>
				<div className="form-input">
					<label>age:</label>
					<div className="">
						<div className="">
							<input type="radio" className="" id="characteristic-age" name="age" value="puppy" required/>
							<label htmlFor="characteristic-age" className="">puppy</label>
						</div>
						<div className="">
							<input type="radio" className="" id="characteristic-age" name="age" value="adult" required/>
							<label htmlFor="characteristic-age" className="">adult</label>
						</div>
						<div className="">
							<input type="radio" className="" id="characteristic-age" name="age" value="senior" required/>
							<label htmlFor="characteristic-age" className="">senior</label>
						</div>
					</div>
				</div>
				<div className="form-input">
					<label>size:</label>
					<div className="">
						<div className="">
							<input type="radio" className="" id="characteristic-size" name="size" value="S" required/>
							<label htmlFor="characteristic-size" className="">S</label>
						</div>
						<div className="">
							<input type="radio" className="" id="characteristic-size" name="size" value="M" required/>
							<label htmlFor="characteristic-size" className="">M</label>
						</div>
						<div className="">
							<input type="radio" className="" id="characteristic-size" name="size" value="L" required/>
							<label htmlFor="characteristic-size" className="">L</label>
						</div>
						<div className="">
							<input type="radio" className="" id="characteristic-size" name="size" value="XL" required/>
							<label htmlFor="characteristic-size" className="">XL</label>
						</div>
					</div>
				</div>
				<div className="form-input">
					<label>training:</label>
					<div className="">
						<div className="">
							<input type="radio" className="" id="characteristic-training" name="training" value="needs training"/>
							<label htmlFor="characteristic-training" className="">needs training</label>
						</div>
						<div className="">
							<input type="radio" className="" id="characteristic-training" name="training" value="has basic training"/>
							<label htmlFor="characteristic-training" className="">has basic training</label>
						</div>
						<div className="">
							<input type="radio" className="" id="characteristic-training" name="training" value="well trained"/>
							<label htmlFor="characteristic-training" className="">well trained</label>
						</div>
					</div>
				</div>
				<div className="form-input">
					<label>characteristics:</label>
					<div className="">
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristics" name="characteristics" value="house-broken"/>
							<label htmlFor="characteristic-house-broken" className="">house broken</label>
						</div>
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristics" name="characteristics" value="crate-trained"/>
							<label htmlFor="characteristics" className="">crate-trained</label>
						</div>
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristics" name="characteristics" value="neutered/spayed"/>
							<label htmlFor="characteristics" className="">neutered/spayed</label>
						</div>
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristics" name="characteristics" value="vaccinated"/>
							<label htmlFor="characteristics" className="">vaccinated</label>
						</div>
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristics" name="characteristics" value="micro-chipped"/>
							<label htmlFor="characteristics" className="">micro-chipped</label>
						</div>
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristics" name="characteristics" value="special-needs"/>
							<label htmlFor="characteristics" className="">special needs</label>
						</div>
						<input type="hidden" id="characteristicsArrayStringId" name="characteristics" value="" />
					</div>
				</div>
				<div className="form-input">
					<label>compatibility:</label>
					<div className="">
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristic-compatibility" name="compatibility" value="apartments"/>
							<label htmlFor="characteristic-compatibility" className="">apartments</label>
						</div>
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristic-compatibility" name="compatibility" value="kids"/>
							<label htmlFor="characteristic-compatibility" className="">kids</label>
						</div>
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristic-compatibility" name="compatibility" value="kitties"/>
							<label htmlFor="characteristic-compatibility" className="">kitties</label>
						</div>
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristic-compatibility" name="compatibility" value="puppies"/>
							<label htmlFor="characteristic-compatibility" className="">puppies</label>
						</div>
						<div className="">
							<input onChange={stringifyArray} type="checkbox" className="" id="characteristic-compatibility" name="compatibility" value="seniors"/>
							<label htmlFor="characteristic-compatibility" className="">seniors</label>
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