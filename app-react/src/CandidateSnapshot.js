import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class CandidateSnapshot extends Component {
	render() {
		console.log(this.props)
		const skills = this.props.skills.map(skill => <div key={skill.id}>{skill.name}</div>)

		return (
			<div>
				<div className="panel panel-default">
				<div className="panel-body">
					<div className="col-sm-6">
						<img src={this.props.avatar.url} className="img-circle" alt="profile" />
						<h3 className="text-uppercase">{this.props.first_name} {this.props.last_name}</h3>
						{/*<p className="text-uppercase">location - {this.props.location}</p>*/}
						<button type="button" className="btn btn-default btn-transparent-charcoal text-center" onClick={() => browserHistory.push('/candidateprofile/' + this.props.user_id)}>View Profile</button>
					</div>
					<div className="col-sm-6">
					<br/>
						<p className="text-uppercase bold-heading">About</p>
						<p>{this.props.about}</p>
						<p className="text-uppercase bold-heading">skills</p>
						<div>{skills}</div><br/>
					</div>
					</div>
				</div>
			</div>
			
		);
	}
}

export default CandidateSnapshot;
