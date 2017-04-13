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
                <h1>TURN</h1>
                <h4 className="text-uppercase">connecting people with meaningful work</h4>
                <br/><br/>
                <h4 className="text-uppercase">Sign up</h4>
                <button type="button" className="btn btn-transparent" onClick={() => browserHistory.push('/employersignup')}>I'm an employer</button>
                <button type="button" className="btn btn-transparent" onClick={() => browserHistory.push('/seekersignup')}>I'm looking for a job</button>
            </div>
        </div>
        </header>
        <br/>
        <div className="row text-center">
            <div className="col-sm-8 col-sm-offset-2">
                {/*<h3>Turn</h3>
                <h4>Turn is an employement platform for connecting workers + employers</h4>*/}
            </div>
        </div>
        <div className="row text-center">
            <div className="col-sm-4 col-sm-offset-1">
                    <h2>ABOUT US</h2>
                    <h4>We don't think having a record should mean that you don't have access to financial stability through a job.  Our goal is to connect employers who share our conviction and people who need work.  Our hope is to help restore autonomy to folks getting back on their feet.</h4>
                    
            </div>
            <div className="col-sm-4 col-sm-offset-1">
                    <h2>NEW LEAF</h2>
                    <h4>New Leaf – New Life is a 501 c3 nonprofit organization that offers services to folks in the Monroe County Jail during incarceration and after release. Applying the philosophy of therapeutic justice, we encourage personal growth and self-advocacy, supporting incarcerated individuals in their efforts to make a successful transition back into the community.</h4>
            </div>
        </div>
    </div>
    );
  }
}

export default Home;
