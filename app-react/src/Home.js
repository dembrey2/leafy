import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
      <header>
        <div className="row">
            <div className="col-sm-12 text-center">
                <h1>Connecting people with meaningful work</h1>
                <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ea excepturi quam nam.</h4>
                <br/>
                <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/employersignup')}>sign up as an employer</button>
                <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/seekersignup')}>sign up as a job seeker</button>
            </div>
        </div>
        </header>
        <br/>
        <div className="row">
            <div className="col-sm-4 col-sm-offset-1">
                <div className="panel panel-default text-center">
                    <div className="panel-body">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde velit neque debitis numquam dolor adipisci officiis laboriosam consequatur, eum quia dignissimos quis praesentium maxime explicabo necessitatibus consequuntur. Deserunt, et, doloremque?</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 col-sm-offset-1">
                <div className="panel panel-default text-center">
                    <div className="panel-body">
                    <h2>New Leaf Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde velit neque debitis numquam dolor adipisci officiis laboriosam consequatur, eum quia dignissimos quis praesentium maxime explicabo necessitatibus consequuntur. Deserunt, et, doloremque?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Home;
