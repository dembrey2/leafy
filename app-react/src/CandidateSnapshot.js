import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class CandidateSnapshot extends Component {
	render() {
		
		const skills = this.props.skills.map(skill => <div key={skill.id}>{skill.name}</div>)

		return (
			<div>
							<div className="panel panel-default">
							<div className="panel-body">
								<img src={this.props.avatar} className="img-rounded" alt="profile" />
								<h3 className="text-uppercase">{this.props.first_name} {this.props.last_name}</h3>
								<p className="text-uppercase">About</p>
								<div>{this.props.about}</div>
								<div>{this.props.location}</div>
                                <div className="text-uppercase">skills:</div>
								<div>{skills}</div><br/>
								 <button type="button" className="btn btn-default btn-transparent-charcoal text-center" onClick={() => browserHistory.push('/candidateprofile/' + this.props.id)}>View Profile</button>
							</div>
						</div>
						</div>
			
		);
	}
}

export default CandidateSnapshot;
