import React, { Component } from 'react';

import questions from '../faq'
import './faq.css'

class Faq extends Component {

  render() {
    return <div className="faq">
      <div className="close" onClick={this.props.closeDialog}>x</div>
      <div>
        {questions.map( question => (
          <div className="qanda" key={question.id}>
            <p className="question">{question.question}</p>
            <p className="answer">{question.answer}</p>
          </div>
        ))}
      </div>
    </div>
  }
}

export default Faq
