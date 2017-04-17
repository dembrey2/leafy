import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
	


  render() {
    return (
      <div>
        <Nav/>
			{/*<div className="container">*/}
				{this.props.children}
			
        <Footer/>
      </div>
    );
  }
}

export default App;
