import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class CandidateSnapshot extends Component {
	render() {
		const skills = this.props.skills.map(skill => <div className="label label-success" key={skill.id}>{skill.name}</div>)

		return (
			<div>
						<div className="panel panel-default">
							<div className="panel-body text-center">
								<img src={this.props.avatar} className="img-rounded" alt="profile" />
								<h3>{this.props.first_name} {this.props.last_name}</h3>
								<p>About</p>
								<p>{this.props.about}</p>
								<p>{this.props.location}</p>
                                <div>skills:</div>
								<div>{skills}</div>
								 <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/candidateprofile/' + this.props.id)}>View Profile</button>
							</div>
						</div>
			</div>
		);
	}
}

export default CandidateSnapshot;
