import React, { Component } from 'react';
import './App.css';
import NameatronName from './components/NameatronName'
import Faq from './components/faq'
import About from './components/about'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { nameatronName : "", enteredName : "", showFaq: false, isAddVersion: false, lastVersion: ""}
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
              <input type="text" name="enteredName" onChange={this.handleChange} placeholder="Description"></input>
              <button>
              Name it
              </button>
            </p>
            <p className="entry">
              Add a version? :
              <input type="checkbox" name="isAddVersion" onChange={this.handleChange} checked={this.state.isAddVersion}/>

              { this.state.isAddVersion &&
              (
                  <span>
                    Last version :
                    <input type="text" name="lastVersion" onChange={this.handleChange} checked={this.state.lastVersion}/>
                  </span>
              )}
            </p>

        </form>

        <NameatronName nameatronName={this.state.nameatronName} isAddVersion={this.state.isAddVersion} lastVersion={this.state.lastVersion}/>

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
    var newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value
    this.setState({ [e.target.name] : newValue})
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
