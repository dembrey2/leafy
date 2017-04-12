import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class CandidateSnapshot extends Component {
	render() {

		return (
			<div>
						<div className="panel panel-default">
							<div className="panel-body text-center">
								<img src="/img/bluesquare.png" className="img-rounded" alt="profile" />
								<h3>First Name Last Name</h3>
								<p>About</p>
                                <div>skills:</div>
								 <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/profile/' + this.state.user_id)}>View Profile</button>
							</div>
						</div>
			</div>
		);
	}
}

export default CandidateSnapshot;
