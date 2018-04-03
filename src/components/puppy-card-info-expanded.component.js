import React from 'react';

export default function PuppyCardInfoExpanded(props)
{
	// console.log(props);

	const puppyNameProp = props.puppyProp["0"] && props.puppyProp["0"].name;
	const puppyGenderProp = props.puppyProp["0"] && props.puppyProp["0"].gender;
	const puppyAgeProp = props.puppyProp["0"] && props.puppyProp["0"].age;
	const puppySizeProp = props.puppyProp["0"] && props.puppyProp["0"].size;
	const puppyTrainingProp = props.puppyProp["0"] && props.puppyProp["0"].training;
	const puppyCharacteristicsProp = props.puppyProp["0"] && props.puppyProp["0"].characteristics;
	const puppyCompatibilityProp = props.puppyProp["0"] && props.puppyProp["0"].compatibility;
	const puppyBiographyProp = props.puppyProp["0"] && props.puppyProp["0"].biography;
	const puppyAdoptionFeeProp = props.puppyProp["0"] && props.puppyProp["0"].adoptionFee;
	const puppyShelterNameProp =  props.puppyProp["0"] && props.puppyProp["0"].shelterId.name;
	const puppyShelterAddressNumberProp =  props.puppyProp["0"] && props.puppyProp["0"].shelterId.address.number;
	const puppyShelterAddressStreetProp =  props.puppyProp["0"] && props.puppyProp["0"].shelterId.address.street;
	const puppyShelterAddressCityProp =  props.puppyProp["0"] && props.puppyProp["0"].shelterId.address.city;
	const puppyShelterAddressStateProp =  props.puppyProp["0"] && props.puppyProp["0"].shelterId.address.state;
	const puppyShelterAddressZipcodeProp =  props.puppyProp["0"] && props.puppyProp["0"].shelterId.address.zipcode;
	const puppyShelterTelephoneProp =  props.puppyProp["0"] && props.puppyProp["0"].shelterId.telephone;
	const puppyShelterEmailProp =  props.puppyProp["0"] && props.puppyProp["0"].shelterId.email;

	return(
		<div className="puppy-card-expanded">
			{puppyNameProp.length > 0 &&
				<p className="name">
					<span className="puppy-card-expanded-label">Name: </span> 
					<span className="puppy-card-expanded-content">{puppyNameProp}</span>
				</p>
			}
			{puppyGenderProp.length > 0 &&
				<p className="gender">
					<span className="puppy-card-expanded-label">Gender: </span> 
					<span className="puppy-card-expanded-content">{puppyGenderProp}</span>
				</p>
			}
			{puppyAgeProp.length > 0 &&
				<p className="age">
					<span className="puppy-card-expanded-label">Age: </span> 
					<span className="puppy-card-expanded-content">{puppyAgeProp}</span>
				</p>
			}
			{puppySizeProp.length > 0 &&
				<p className="size">
					<span className="puppy-card-expanded-label">Size: </span> 
					<span className="puppy-card-expanded-content">{puppySizeProp}</span>
				</p>
			}
			{puppyTrainingProp.length > 0 &&
				<p className="Training">
					<span className="puppy-card-expanded-label">Training: </span> 
					<span className="puppy-card-expanded-content">{puppyTrainingProp}</span>
				</p>
			}
			{puppyCharacteristicsProp.length > 0 &&
				<p className="characteristics">
					<span className="puppy-card-expanded-label">Characteristics: </span> 
					<span className="puppy-card-expanded-content">{puppyCharacteristicsProp}</span>
				</p>
			}
			{puppyCompatibilityProp.length > 0 &&
				<p className="compatibility">
					<span className="puppy-card-expanded-label">Compatibility: </span> 
					<span className="puppy-card-expanded-content">{puppyCompatibilityProp}</span>
				</p>
			}
			{puppyBiographyProp.length > 0 &&
				<p className="biography">
					<span className="puppy-card-expanded-label">Biography: </span> 
					<span className="puppy-card-expanded-content">{puppyBiographyProp}</span>
				</p>
			}
			{puppyAdoptionFeeProp.length > 0 &&
				<p className="adoption-fee">
					<span className="puppy-card-expanded-label">Adoption Fee: </span> 
					<span className="puppy-card-expanded-content">{puppyAdoptionFeeProp}</span>
				</p>
			}
			<div className="shelter-info">
				<p className="puppy-card-expanded-label">Shelter Information:</p>
				{puppyShelterNameProp.length > 0 &&
					<p className="name"> 
						<span className="puppy-card-expanded-content">{puppyShelterNameProp}</span>
					</p>
				}
				{puppyShelterAddressNumberProp.length > 0 && puppyShelterAddressStreetProp.length > 0 &&
					<p className="address">
						<span className="puppy-card-expanded-content">{puppyShelterAddressNumberProp} {puppyShelterAddressStreetProp}</span>
					</p>
				}
				{puppyShelterAddressCityProp.length > 0 && puppyShelterAddressStateProp.length > 0 && puppyShelterAddressZipcodeProp.length > 0 &&
					<p className="address">
						<span className="puppy-card-expanded-content">{puppyShelterAddressCityProp}, {puppyShelterAddressStateProp} {puppyShelterAddressZipcodeProp}</span>
					</p>
				}
				{puppyShelterTelephoneProp.length > 0 &&
					<p className="telephone">
						<span className="puppy-card-expanded-content">{puppyShelterTelephoneProp}</span>
					</p>
				}
				{puppyShelterEmailProp.length > 0 &&
					<p className="email">
						<span className="puppy-card-expanded-content">{puppyShelterEmailProp}</span>
					</p>
				}
			</div>
		</div>
	)
}