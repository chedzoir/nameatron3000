import React, { Component } from 'react';
import './App.css';
import NameatronName from './components/NameatronName'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { nameatronName : "", enteredName : ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
}


export default App;
