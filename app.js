console.log('starting app');

const fs = require('fs');
const path = require('path')
const clean = require('./clean')
const command = process.argv[2]
const dirname = path.join(__dirname)
const defaultOutPath = path.join(__dirname, 'output.txt')

const joinArr =  () => {
  var cleanArr = []
  var comma = clean.CommaFile()
  var pipe = clean.PipeFile()
  var space = clean.SpaceFile()
  return cleanArr
}

const doOutput = () => {
  let arr = joinArr()
  var dataToAppend = []
  arr.map(x => dataToAppend.push(x))
  fs.writeFileSync(defaultOutPath, dataToAppend)
}
doSortAndOutput()