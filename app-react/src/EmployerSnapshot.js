import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class EmployerSnapshot extends Component {
	render() {
		const user = window.user;

		return (
			<div>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<div className="panel panel-default">
							<div className="panel-body text-center">
								<img src="img/redsquare.png" className="img-rounded" alt="profile" />
								<h3>{user.employer_profile.company_name}</h3>
								<h4>{user.employer_profile.contact_name}</h4>
								<p>{user.about}</p>
								<span><button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/EmployerProfileEdit')}>Edit</button> <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/EmployerDetail')}>View Profile</button></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EmployerSnapshot;
