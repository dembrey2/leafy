import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2 text-center">
                <h1>Landing/Marketing Page So Exciting &amp; Nice!</h1>

                <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/employersignup')}>Employer sign up</button>
                <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/usersignup')}>User sign up</button>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
                <div className="panel panel-default">
                    <div className="panel-body">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde velit neque debitis numquam dolor adipisci officiis laboriosam consequatur, eum quia dignissimos quis praesentium maxime explicabo necessitatibus consequuntur. Deserunt, et, doloremque?</p>
                    </div>
                </div>
                <div className="panel panel-default">
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
