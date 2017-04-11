import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
	


  render() {
    return (
      <div>
        <Nav/>
			<div className="container">
				{this.props.children}
			</div>
        <Footer/>
    </div>
    );
  }
}

export default App;
