console.log('starting app');

const fs = require('fs');
const path = require('path')
const clean = require('./clean')
const sort = require('./sort')
const command = process.argv[2]
const dirname = path.join(__dirname)
const defaultOutPath = path.join(__dirname, 'output.txt')

const joinArr =  () => {
  var cleanArr = []
  var comma = clean.CommaFile()
  var pipe = clean.PipeFile()
  var space = clean.SpaceFile()
  comma.map(x => cleanArr.push(x))
  pipe.map(x => cleanArr.push(x))
  space.map(x => cleanArr.push(x))
  return cleanArr
}

const arrToString = (arr) => {
 var newString = arr.map(x => x.join(' '))
  return newString.toString().replace(/,/g,'\n')
}

const doSortAndOutput = () => {
  let  arr =   joinArr()
  var byGender = sort.ByGender(arr)
  var byDob = sort.ByDob(arr)
  var byLast =  sort.ByLastN(arr)
  var byGenderOutput = arrToString(byGender)
  var byLastOutput = arrToString(byLast)
  var byDobOutput = arrToString(byDob)
  var dataToAppend = `Output 1: \n${byGenderOutput}\n\nOutput 2:\n${byDobOutput}\n\nOutput 3:\n${byLastOutput}`
  fs.writeFileSync(defaultOutPath, dataToAppend)
}
doSortAndOutput()