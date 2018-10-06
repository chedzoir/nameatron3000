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

function ificater(val) {
  return val + validateEnding(val, "ificater")
}

function ster(val) {
  return val + validateEnding(val, "ster")
}

function version(isAddVersion, lastVersion) {
  if (isAddVersion) {
    return " " + getVersion(lastVersion)
  }
  return ""
}

function getVersion(lastVersion) {
  if (lastVersion) {
    return nextVersion(Number(lastVersion), lastVersion)
  }
  return 3000
}

function nextVersion(lastVersionValue, lastVersion) {
  if (isNaN(lastVersionValue)) {
    return lastVersion + "S"
  }
  if (lastVersionValue === 8 || lastVersionValue === 9) {
    return "X"
  }
  return lastVersionValue + getIncrement(lastVersionValue)
}

function getIncrement(lastVersionValue) {
  var order = Math.pow(10, Math.floor(Math.log10(lastVersionValue)))
  if ( lastVersionValue / order === Math.floor(lastVersionValue / order)) {
    return order
  }
  return 1
}

const EndingAppenders = [ atron, anator, aniser, ifier, ificater, ster ]

module.exports = { validateEnding, EndingAppenders, version};
