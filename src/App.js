import React, { Component } from 'react';
import './App.css';
import NameatronName from './components/NameatronName'
import Faq from './components/faq'
import About from './components/about'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { nameatronName : "", enteredName : "", showFaq: false}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.openFAQ = this.openFAQ.bind(this)
    this.closeFAQ = this.closeFAQ.bind(this)
    this.openAbout = this.openAbout.bind(this)
    this.closeAbout = this.closeAbout.bind(this)
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1><span className="title">Nameatron</span> <span className="version">3000</span></h1>
          <h4 className="tagline">
            Solving the hardest problem in IT
          </h4>
        </header>
        <form onSubmit={this.handleSubmit}>
            <p>
              Enter the one word that best describes what we're about to name
            </p>
            <p className="entry">
              <input type="text" onChange={this.handleChange} placeholder="Description"></input>
              <button>
              Name it
              </button>
            </p>
        </form>

        <NameatronName nameatronName={this.state.nameatronName}/>

        {this.state.showFaq && <Faq closeDialog={this.closeFAQ}/>}
        {this.state.showAbout && <About closeDialog={this.closeAbout}/>}

        <div className="footer">
          <a onClick={this.openFAQ}>FAQ</a>
          <span className="divider">|</span>
          <a onClick={this.openAbout}>About</a>
          <span className="divider">|</span>
          <a href="https://github.com/chedzoir/nameatron3000" target="github_window">Fork me on GitHub</a>
        </div>
      </div>
    );
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({ nameatronName : this.state.enteredName})
  }

  handleChange(e) {
    this.setState({ enteredName : e.target.value})
  }

  openFAQ(e) {
    e.preventDefault();
    this.setState({ showFaq : true, showAbout : false})
  }

  closeFAQ(e) {
    e.preventDefault();
    this.setState({ showFaq : false})
  }

  openAbout(e) {
    e.preventDefault();
    this.setState({ showAbout : true, showFaq : false})
  }

  closeAbout(e) {
    e.preventDefault();
    this.setState({ showAbout : false})
  }
}


export default App;
