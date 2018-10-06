import React, { Component } from 'react';

import './about.css'

class About extends Component {

  render() {
    return <div className="about">
        <div className="close" onClick={this.props.closeDialog}>x</div>
        <div className="text">The Nameatron was written by Malcolm Chedzoy, following literally a few hours of consumer research. Previous benefactors of this are the Awoogatron and the Migrationator</div>
      </div>

  }
}


export default About
