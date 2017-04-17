import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class UserSnapshot extends Component {
	render() {
		const user = window.user;

		return (
			<div>
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<div className="panel panel-default">
							<div className="panel-body text-center">
								<img src={user.avatar.url} className="img-rounded" alt="profile" />
								<h3>{user.seeker_profile.first_name} {user.seeker_profile.last_name}</h3>
								<p>{user.about}</p>
								<span><button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/profile-edit')}>Edit</button> <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/profile')}>View Profile</button></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UserSnapshot;
