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
                about: ''
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
            <div className="col-sm-8 col-sm-offset-2">
                <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>
                <br /><br />
                <div className="panel panel-default text-center">
                    <div className="panel-body">
                        <img src="/img/redsquare.png" alt="profile" />
                        <h3>{user.employer_profile.company_name}</h3>
                        <h4>Contact Information:</h4>
                        <p>{user.employer_profile.contact_name}</p>
                        <p>{user.employer_profile.contact_phone}</p>
                        <p>{user.employer_profile.contact_email}</p>
                        <h4>Location:</h4>
                        <p>{user.location.name}</p>
                        <h4>About:</h4>
                        <p>{user.about}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



        );
    }
}

export default EmployerDetail;