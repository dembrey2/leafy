import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'

class EmployerSignup extends Component {
  render() {
    return (
      	<div>
		  <EmployerSnapshot isEmployer={true}/>
    		<div className="row">
				<div className="col-sm-6 col-sm-offset-3 ">
					<h3>Add/Edit Job</h3>
					<form>
						<div className="form-group">
							<label htmlFor="companyName">Company Name</label>
							<input type="company" className="form-control" id="company_name" placeholder=""/>
						</div>
						<div className="form-group">
							<label htmlFor="jobTitle">Job Title</label>
							<input type="jobTitle" className="form-control" id="job_title" placeholder=""/>
						</div>
						
						<div className="form-group">
							<label htmlFor="transportation">Transportation:</label>
							<select className="form-control">
								<option>Provided</option>
								<option>Not Provided</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="location">Location:</label>
							<select className="form-control">
								<option>Downtown Bloomington</option>
								<option>North Bloomington</option>
								<option>East Bloomington</option>
								<option>South Bloomington</option>
								<option>West Bloomington</option>
								<option>Greater Monroe County</option>
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="about">Description</label>
							<textarea className="form-control" id="description" placeholder=""/>
						</div>
                        <label htmlFor="skillsRequired">Skills Required</label>
							<div className="row">
								<label className="checkbox">
								<input type="checkbox" id="Checkbox1" value="option1"/> Lawncare
								</label>
								<label className="checkbox">
								<input type="checkbox" id="Checkbox2" value="option2"/> Construction
								</label>
								<label className="checkbox">
								<input type="checkbox" id="Checkbox3" value="option3"/> Food Service
								</label>
							</div>

						<div className="form-group text-center">
						<button type="submit" className="btn btn-default" onClick={() => browserHistory.push('/employerdashboard')}>Submit</button>
						</div>
				</form>
			</div>
		</div>
    </div>
    );
  }
}

export default EmployerSignup;
