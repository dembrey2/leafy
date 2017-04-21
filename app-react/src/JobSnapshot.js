
import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class JobSnapshot extends Component {
  render() {


    return (
	<div>
		<div className="panel panel-default">
			<div className="panel-body">
				<div className="col-sm-6">
				<div> {window.user.role === 'employer' ? '' : <img src={this.props.avatar.url} className="img-circle"/>}</div>
					<h3 className="text-uppercase bold-heading">{this.props.title}</h3>
					<h4>{this.props.company_name}</h4>
				</div>
				<div className="col-sm-6">
					<p className="bold-heading text-uppercase">About</p>
					<p>{this.props.description}</p>
					<p className="bold-heading text-uppercase">Location</p> 
					<p>{this.props.location}</p>
					
					{this.props.isEmployer ? <span> <div> </div> <br /><button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/editjob/' + this.props.id)}>Edit</button>
						<button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/jobdetail/' + this.props.id)}>View details</button></span> : <button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/jobdetail/' + this.props.id)}>View details</button>}
				</div>
			</div>
		</div>
	</div>
    );
  }
}

export default JobSnapshot;
