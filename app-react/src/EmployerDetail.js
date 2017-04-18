import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class EmployerDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                employer_profile: {
                    company_name: '',
                    contact_name: '',
                    contact_phone: '',
                    contact_email: '',
                },
                about: '',
                location: ''
            }
        }
    }

    componentWillMount() {
        if (this.props.params.userId) {
            fetch(window.apiHost + '/api/users/' + this.props.params.userId + '?token=' + window.user.token) 
            .then(response => response.json())
            .then(response => this.setState({user:{...response.user}}))
        }
    }

    render() {
        let user;

        if (this.props.params.userId) {
            user = this.state.user;
        }
        else {
            user = window.user;
        }
console.log(user);
return (
    <div>
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                <button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>
                <br /><br />
                <div className="panel panel-default text-center">
                    <div className="panel-body">
                        <img src="http://unsplash.it/200/?random" className="img-circle" alt="profile" />
                        <h3>{user.employer_profile.company_name}</h3>
                        <p>{user.about}</p>
                        <hr/>
                        <h4 className="text-uppercase">Contact Information:</h4>
                        <p>Contact Person: {user.employer_profile.contact_name}</p>
                        <p>{user.employer_profile.contact_phone}</p>
                        <p>{user.employer_profile.contact_email}</p>
                        <p>Location: {user.location.name}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>



        );
    }
}

export default EmployerDetail;