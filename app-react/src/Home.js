import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
      <header>
        <div className="row">
            <div className="col-sm-12 text-center">
                {/*<h1 className="title">TURN</h1>*/}
                {/*<h1>TURN</h1>*/}
                <h3 className="text-uppercase">connecting people with meaningful work</h3>
                <p className="text-left">We don't think having a record should mean that you don't have access to financial stability through a job.  Our goal is to connect employers who share our conviction and people who need work.  Our hope is to help restore autonomy to folks getting back on their feet. We're doing this with Turn, an employment platform for connecting workers and employers.</p>
                <br/><br/>
                <h5 className="text-uppercase">Sign up</h5>
                <button type="button" className="btn btn-transparent-charcoal" onClick={() => browserHistory.push('/employersignup')}>I'm an employer</button>
                <button type="button" className="btn btn-transparent-charcoal" onClick={() => browserHistory.push('/seekersignup')}>I'm looking for a job</button>
            </div>
        </div>
        </header>
        <br/>
        <div className="container">
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
                {/*<h3>Turn</h3>
                <h4>Turn is an employment platform for connecting workers + employers</h4>*/}
            </div>
        </div>
        <div className="row text-center about-section">
        </div>
        <div className="row text-center about-section">
            <div className="col-sm-8 col-sm-offset-2">
                    <h3 className="text-uppercase">New Leaf New Life</h3>
                    <h4>New Leaf – New Life is a 501 c3 nonprofit organization that offers services to folks in the Monroe County Jail during incarceration and after release. Applying the philosophy of therapeutic justice, we encourage personal growth and self-advocacy, supporting incarcerated individuals in their efforts to make a successful transition back into the community.</h4>
        </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Home;
