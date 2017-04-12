
import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class JobSnapshot extends Component {
  render() {

    return (
            <div>
        		<div className="panel panel-default">
            		<div className="panel-body">
						<img src="https://unsplash.it/200/?random" alt="company logo"/>
						<h3>{this.props.company_name}</h3>
						<h4>{this.props.title}</h4>
						<p>About: {this.props.description}</p>
						<p>Location: {this.props.location}</p>
						{this.props.isEmployer ? <span> <div> 3 Matches</div> <br/><button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/editjob/' + this.props.id)}>Edit</button> 
						<button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobdetail/' + this.props.id)}>View details</button></span> : <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobdetail/' + this.props.id)}>View details</button>}
					</div>
				</div>
			</div>
    );
  }
}

export default JobSnapshot;
