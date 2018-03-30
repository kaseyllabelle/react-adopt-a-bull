import React from 'react';

export default function PuppyCardInfoExpanded(props)
{
	console.log(props);

	const puppyNameProp = props.puppyProp["0"] && props.puppyProp["0"].name;
	const puppyGenderProp = props.puppyProp["0"] && props.puppyProp["0"].gender;
	const puppyAgeProp = props.puppyProp["0"] && props.puppyProp["0"].age;
	const puppySizeProp = props.puppyProp["0"] && props.puppyProp["0"].size;
	const puppyTrainingProp = props.puppyProp["0"] && props.puppyProp["0"].training;
	const puppyCharacteristicsProp = props.puppyProp["0"] && props.puppyProp["0"].characteristics;
	const puppyCompatibilityProp = props.puppyProp["0"] && props.puppyProp["0"].compatibility;
	const puppyBiographyProp = props.puppyProp["0"] && props.puppyProp["0"].biography;
	const puppyAdoptionFeeProp = props.puppyProp["0"] && props.puppyProp["0"].adoptionFee;
	// const puppyShelterIdProp =  props.puppyProp["0"] && props.puppyProp["0"].shelterId;

	// TODO:
	// make fields data-driven

	return(
		<div className="puppy-card-expanded">
			<p className="name">
				<span className="puppy-card-expanded-label">Name: </span> 
				<span className="puppy-card-expanded-content">{puppyNameProp}</span>
			</p>
			<p className="gender">
				<span className="puppy-card-expanded-label">Gender: </span> 
				<span className="puppy-card-expanded-content">{puppyGenderProp}</span>
			</p>

			<p className="age">
				<span className="puppy-card-expanded-label">Age: </span> 
				<span className="puppy-card-expanded-content">{puppyAgeProp}</span>
			</p>
			<p className="size">
				<span className="puppy-card-expanded-label">Size: </span> 
				<span className="puppy-card-expanded-content">{puppySizeProp}</span>
			</p>
			<p className="Training">
				<span className="puppy-card-expanded-label">Training: </span> 
				<span className="puppy-card-expanded-content">{puppyTrainingProp}</span>
			</p>
			<p className="characteristics">
				<span className="puppy-card-expanded-label">Characteristics: </span> 
				<span className="puppy-card-expanded-content">{puppyCharacteristicsProp}</span>
			</p>
			<p className="compatibility">
				<span className="puppy-card-expanded-label">Compatibility: </span> 
				<span className="puppy-card-expanded-content">{puppyCompatibilityProp}</span>
			</p>
			<p className="biography">
				<span className="puppy-card-expanded-label">Biography: </span> 
				<span className="puppy-card-expanded-content">{puppyBiographyProp}</span>
			</p>
			<p className="adoption-fee">
				<span className="puppy-card-expanded-label">Adoption Fee: </span> 
				<span className="puppy-card-expanded-content">{puppyAdoptionFeeProp}</span>
			</p>
			<div className="shelter-info">
				<p className="puppy-card-expanded-label">Shelter Information:
				</p>
				{/*<p className="name"> 
					<span className="puppy-card-expanded-content">{puppyShelterIdProp}</span>
				</p>
				<p className="address">
					<span className="puppy-card-expanded-content"><%=data[0].shelterId.address.number%> <%=data[0].shelterId.address.street%></span>
				</p>
				<p className="address">
					<span className="puppy-card-expanded-content"><%=data[0].shelterId.address.city%> <%=data[0].shelterId.address.state%> <%=data[0].shelterId.address.zipcode%></span>
				</p>
				<p className="telephone">
					<span className="puppy-card-expanded-content"><%=data[0].shelterId.telephone%></span>
				</p>
				<p className="email">
					<span className="puppy-card-expanded-content"><%=data[0].shelterId.email%></span>
				</p>*/}
			</div>
			{/*
				TODO:
				// <div className="puppy-card-expanded">
				// 	<p className="name">
				// 		<span className="puppy-card-expanded-label">Name:</span> 
				// 		<span className="puppy-card-expanded-content"><%=data[0].name%></span>
				// 	</p>
				// 	<p className="gender">
				// 		<span className="puppy-card-expanded-label">Gender:</span> 
				// 		<span className="puppy-card-expanded-content"><%=data[0].gender%></span>
				// 	</p>
				// 	<p className="age">
				// 		<span className="puppy-card-expanded-label">Age:</span> 
				// 		<span className="puppy-card-expanded-content"><%=data[0].age%></span>
				// 	</p>
				// 	<p className="size">
				// 		<span className="puppy-card-expanded-label">Size:</span> 
				// 		<span className="puppy-card-expanded-content"><%=data[0].size%></span>
				// 	</p>
				// 	<p className="Training">
				// 		<span className="puppy-card-expanded-label">Training:</span> 
				// 		<span className="puppy-card-expanded-content"><%=data[0].training%></span>
				// 	</p>
				// 	<p className="characteristics">
				// 		<span className="puppy-card-expanded-label">Characteristics:</span> 
				// 		<span className="puppy-card-expanded-content"><%=data[0].characteristics%></span>
				// 	</p>
				// 	<p className="compatibility">
				// 		<span className="puppy-card-expanded-label">Compatibility:</span> 
				// 		<span className="puppy-card-expanded-content"><%=data[0].compatibility%></span>
				// 	</p>
				// 	<p className="biography">
				// 		<span className="puppy-card-expanded-label">Biography:</span> 
				// 		<span className="puppy-card-expanded-content"><%=data[0].biography%></span>
				// 	</p>
				// 	<p className="adoption-fee">
				// 		<span className="puppy-card-expanded-label">Adoption Fee:</span> 
				// 		<span className="puppy-card-expanded-content"><%=data[0].adoptionFee%></span>
				// 	</p>
				// 	<div className="shelter-info">
				// 		<p className="puppy-card-expanded-label">Shelter Information:
				// 		</p>
				// 		<p className="name"> 
				// 			<span className="puppy-card-expanded-content"><%=data[0].shelterId.name%></span>
				// 		</p>
				// 		<p className="address">
				// 			<span className="puppy-card-expanded-content"><%=data[0].shelterId.address.number%> <%=data[0].shelterId.address.street%></span>
				// 		</p>
				// 		<p className="address">
				// 			<span className="puppy-card-expanded-content"><%=data[0].shelterId.address.city%> <%=data[0].shelterId.address.state%> <%=data[0].shelterId.address.zipcode%></span>
				// 		</p>
				// 		<p className="telephone">
				// 			<span className="puppy-card-expanded-content"><%=data[0].shelterId.telephone%></span>
				// 		</p>
				// 		<p className="email">
				// 			<span className="puppy-card-expanded-content"><%=data[0].shelterId.email%></span>
				// 		</p>
				// 	</div>
				// </div>
			*/}
		</div>
	)
}