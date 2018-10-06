import React, { Component } from 'react';

import { EndingAppenders, version } from '../utils/namingUtils.js'

class NameatronName extends Component {

    render() {
        var nameToUse = this.props.nameatronName
        var isAddVersion = this.props.isAddVersion
        var lastVersion = this.props.lastVersion

        if (nameToUse.length) {
            return (
                <div className="nameatronResults">
                  <p>Choose your name from the following options</p>
                  <ul>
                  {EndingAppenders.map(ending => (
                            <li key={ending(nameToUse)}>
                              {ending(nameToUse) + version(isAddVersion, lastVersion)}
                            </li>
                          ))}
                  </ul>
                </div>
            )
        }
        return null
    }

}


export default NameatronName
