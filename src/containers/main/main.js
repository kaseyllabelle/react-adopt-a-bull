import React from 'react';

export default function Main(props)
{
	return(
		<section className="main js-main-adopters">
			<div className="main-inner">
				<div className="js-puppy-card">
				</div>
				<div className="bottom-nav">
					<a className="icon-wrapper next">
						<i className="material-icons icon-next">close</i>
					</a>
					<a className="icon-wrapper mail">
						<i className="material-icons icon-mail">mail_outline</i>
					</a>
					<a className="icon-wrapper favorite">
						<i className="material-icons icon-favorite" data-pId="">favorite_outline</i>
					</a>
				</div>
			</div>
		</section>
	)
}