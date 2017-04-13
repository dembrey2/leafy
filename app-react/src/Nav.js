import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class Nav extends Component {
    constructor(props){
        super(props)
        this.signout = this.signout.bind(this)
    }
        
    signout() {
        sessionStorage.clear();
        window.user = null;
        location.href = '/';
    }

  render() {
    return (
    <nav>
        <div className="container">
                    <div className="row nav">
                        <div className="col-sm-6 text-left nav-left">
                            <a href="#" onClick={() => browserHistory.push('/')}>TURN</a>
                            <a href="#" onClick={() => browserHistory.push('/signin')} >Sign In</a>
                        </div>
                        <div className="col-sm-6 text-right nav-right">
                            <a href="#" onClick={() => browserHistory.push('/dashboard')}>Dashboard</a>
                            <a href="#" onClick={this.signout}>Sign Out</a>
                        </div>
                    </div>
                </div>
    </nav>
        
    );
  }
}

export default Nav;
