'use strict'
// currently only supports defining sass globals from the top level of a js object...
// ...see internet if improvements needed
module.exports = o => {
  var sass = ''
  for (var k in o) {
    sass += '$' + k + ':' + o[k] + ';\n'
  }
  return sass
}
