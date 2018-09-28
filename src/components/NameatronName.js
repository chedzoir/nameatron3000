import React, { Component } from 'react';

import { EndingAppenders } from '../utils/namingUtils.js'

class NameatronName extends Component {

    render() {
        var nameToUse = this.props.nameatronName
        if (nameToUse.length) {
            return (
                <div>
                  <p>Chose from the following names</p>
                  <ul>
                  {EndingAppenders.map(ending => (
                            <li>{ending(nameToUse)}</li>
                          ))}
                  </ul>
                </div>
            )
        }
        return null
    }

}


export default NameatronName