import React, { Component } from 'react';



function validateEnding(val, ending) {
  if (val && ending && val.substr(val.length -1, 1).toLowerCase() === ending.substr(0,1)) {
    return ending.substr(1)
  }
  return ending
}

class NameatronName extends Component {


    constructor(props) {
        super(props)
        //this.state = { endings : ["atron","anator","aniser", "ator"]}
        this.state = {
            endings : [
              this.atron,
              this.anator,
              this.aniser
            ]
        }
    }

    render() {
        var nameToUse = this.props.nameatronName
        if (nameToUse.length) {
            return (
                <div>
                  <p>Chose from the following names</p>
                  <ul>
                  {this.state.endings.map(ending => (
                            <li>{ending(nameToUse)}</li>
                          ))}
                  </ul>
                </div>
            )
        }
        return null
    }


    atron(val) {
      return val + validateEnding(val, "atron")
    }

    anator(val) {
      if (val && val.substr(val.length - 1,1).toLowerCase() === 'n') {
        return val + validateEnding(val, "ator")
      }
      return val + validateEnding(val, "anator")
    }

    aniser(val) { return val + validateEnding(val, "aniser")}


}


export default NameatronName