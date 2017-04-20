import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class AddJob extends Component {
	constructor(props) {
		super(props)
		this.addSkill = this.addSkill.bind(this)
		this.editJob = this.editJob.bind(this)
		this.lookupSkills = this.lookupSkills.bind(this)
		this.lookupLocations = this.lookupLocations.bind(this)

		this.state = {
			location: {
				name: '',
				id: ''
			},
			description: '',
			transportation: '',
			title: '',
			skills: [],
			lookupSkills: [],
			lookupLocations: []
		}
	 }

	 componentWillMount(){
		 this.lookupSkills()
		 this.lookupLocations()

		 if (this.props.params.jobId) {
			this.lookupJob()
		 }
	 }

	 addSkill(e) {
		 let skills = this.state.skills

		 if (e.target.checked) {
			skills.push(Number(e.target.value))
		 }
		 else {
			skills = skills.filter(skillId => skillId !== Number(e.target.value))
			console.log(skills)
		 }

		 this.setState({skills:skills})
	 }

	 lookupSkills() {
		fetch(window.apiHost + '/api/skills')
		.then(function(response) {
				return response.json();
			})
		.then((response) => {
				this.setState({lookupSkills:response.skills})
			})
	 }

	 lookupLocations() {
		fetch(window.apiHost + '/api/locations')
		.then(function(response) {
				return response.json();
			})
		.then((response) => {
				this.setState({lookupLocations:response.locations})
			})
	 }

	 lookupJob() {
		fetch(window.apiHost + '/api/users/' + window.user.id + '/jobs/' + this.props.params.jobId + '?token=' + window.user.token)
		.then(function(response) {
			return response.json();
		})
		.then((response) => {
			this.setState({
				location: response.job.location,
				description: response.job.description,
				title: response.job.title,
				skills: response.job.skills.map(skill => skill.id)
			})
		})
	 }

	 editJob() {
		let data = new FormData()
		data.append('token', window.user.token)
		data.append('job[location_id]', this.state.location.id)	
		data.append('job[description]', this.state.description)
		data.append('job[title]', this.state.title)
		data.append('job[transportation]', this.state.transportation)
		data.append('job[skills]', this.state.skills.join(','))

		fetch(window.apiHost + (this.props.params.jobId ? '/api/users/' + window.user.id + '/jobs/' + this.props.params.jobId : '/api/users/' + window.user.id + '/jobs/'), {
        method: this.props.params.jobId ? 'PUT' : 'POST',
        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: data
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
			// window.user = response.user
			browserHistory.push('/dashboard')
        })
	}

  render() {
	  const skills = this.state.lookupSkills.map(skill => (
		  	<label className="checkbox" key={skill.id}>
				<input type="checkbox" value={skill.id} checked={this.state.skills.includes(skill.id)} onChange={this.addSkill} /> {skill.name}
			</label>
		))
		const locations = this.state.lookupLocations.map(location => (
			<option key={location.id} value={location.id}>{location.name}</option>
		))

		var halfLength = Math.ceil(skills.length / 2)   
		var leftSideSkills = skills.slice(0,halfLength)
		var rightSideSkills = skills.slice(halfLength)

    return (
      	<div>
    		<div className="row">
				<div className="col-sm-6 col-sm-offset-3 ">
					<div className="panel panel-default">
						<div className="panel-body">
					<h3>Add/Edit Job</h3>
					<form>
						<div className="form-group">
							<label htmlFor="title">Job Title</label>
							<input type="text" className="form-control" name="title" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
						</div>
						
						<div className="form-group">
							<label htmlFor="transportation">Transportation:</label>
							<select className="form-control" value={this.state.transportation} onChange={(e) => this.setState({transportation: e.target.value})}>
								<option value="provided">Provided</option>
								<option value="not provided">Not Provided</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="location">Location:</label>
							<select className="form-control" value={this.state.location.name} onChange={(e) => this.setState({location: e.target.value})}>
								{locations}
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="about">Description</label>
							<textarea className="form-control" id="description" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
						</div>
                        <h3 htmlFor="skillsRequired">Skills Required</h3>
							<div className="row">
								<div className="col-sm-6">
									{leftSideSkills}
								</div>
								<div className="col-sm-6">
									{rightSideSkills}
								</div>
							</div>

						<div className="form-group text-center">
						<button type="button" className="btn btn-default" onClick={this.editJob}>Save</button>
						</div>
				</form>
				</div>
				</div>
			</div>
		</div>
    </div>
    );
  }
}

export default AddJob;

