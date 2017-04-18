import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class EmployerSnapshot extends Component {
	render() {
		const user = window.user;

		return (
			<div>
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<div className="panel panel-default">
							<div className="panel-body text-center">
								<img src={user.avatar.url} className="img-circle" alt="profile" />
								<h3>{user.employer_profile.company_name}</h3>
								<h4>{user.employer_profile.contact_name}</h4>
								<p>{user.about}</p>
								<span><button type="button" className="btn btn-default btn-transparent-charcoal text-center" onClick={() => browserHistory.push('/profile-edit')}>Edit</button> <button type="button" className="btn btn-default text-center btn-transparent-charcoal" onClick={() => browserHistory.push('/profile')}>View Profile</button></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EmployerSnapshot;