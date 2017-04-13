import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class CandidateSnapshot extends Component {
	render() {
		const skills = this.props.skills.map(skill => <div className="label label-success" key={skill.id}>{skill.name}</div>)

		return (
			<div>
						<div className="panel panel-default">
							<div className="panel-body text-center">
								<img src="/img/bluesquare.png" className="img-rounded" alt="profile" />
								<h3>{this.props.first_name}</h3>
								<p>About</p>
                                <div>skills:</div>
								<div>{skills}</div>
								 <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/profile/' + this.props.id)}>View Profile</button>
							</div>
						</div>
			</div>
		);
	}
}

export default CandidateSnapshot;
