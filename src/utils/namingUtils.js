function validateEnding(val, ending) {
  if (val && ending && val.substr(val.length -1, 1).toLowerCase() === ending.substr(0,1)) {
    return ending.substr(1)
  }
  return ending
}


function atron(val) {
  return val + validateEnding(val, "atron")
}

function anator(val) {
  if (val && val.substr(val.length - 1,1).toLowerCase() === 'n') {
    return val + validateEnding(val, "ator")
  }
  return val + validateEnding(val, "anator")
}

function aniser(val) {
  if (val && val.substr(val.length - 1,1).toLowerCase() === 'n') {
    return val + validateEnding(val, "iser")
  }
  return val + validateEnding(val, "aniser")
}

function ifier(val) {
  return val + validateEnding(val, "ifier")
}


const EndingAppenders = [ atron, anator, aniser, ifier ]

module.exports = { validateEnding, EndingAppenders};