
import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class JobSnapshot extends Component {
  render() {


    return (
	<div>
		<div className="panel panel-default">
			<div className="panel-body">
				<div className="col-sm-6">
					<h3 className="text-uppercase">{this.props.title}</h3>
					<h4>{this.props.company_name}</h4>
				</div>
				<div className="col-sm-6">
					<p>About: {this.props.description}</p>
					<p>Location: {this.props.location}</p>
					
					{this.props.isEmployer ? <span> <div> </div> <br /><button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/editjob/' + this.props.id)}>Edit</button>
						<button type="button" className="btn btn-default btn-transparent-charcoal text-center" onClick={() => browserHistory.push('/jobdetail/' + this.props.id)}>View details</button></span> : <button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/jobdetail/' + this.props.id)}>View details</button>}
				</div>
			</div>
		</div>
	</div>
    );
  }
}

export default JobSnapshot;
