import React, { Component } from 'react';

import { EndingAppenders } from '../utils/namingUtils.js'

class NameatronName extends Component {

    render() {
        var nameToUse = this.props.nameatronName
        if (nameToUse.length) {
            return (
                <div className="nameatronResults">
                  <p>Choose your name from the following options</p>
                  <ul>
                  {EndingAppenders.map(ending => (
                            <li key={ending(nameToUse)}>{ending(nameToUse)}</li>
                          ))}
                  </ul>
                </div>
            )
        }
        return null
    }

}


export default NameatronName
