console.log('starting app');

const fs = require('fs');
const path = require('path')
const command = process.argv[2]
const dirname = path.join(__dirname)
const defaultOutPath = path.join(__dirname, 'output.txt')

const joinArr =  () => {
//  joining arr since there are 3 txt file
  return cleanArr
}

const readAndProduce = (target) => {
  fileName = target
  const fileToBeRead = path.join(__dirname, fileName)
  fs.readFile(fileToBeRead, function (err, f) {
    if (err) return console.error(err)
    var cleanData = f.toString().replace(/[^\w \/\-\n]/g, "");
    fs.writeFile(defaultOutPath, `Output : \n${cleanData}\n`, function (err) {
      console.log('after')
      if (err) return console.error(err)
      fs.readFile(defaultOutPath, 'utf-8', function (err, data) {
        if (err) return console.error(err)
        console.log(data);
      });
    });
  })
}


fs.readdir(dirname, function (err, filenames) {
  for (i = 0; i < filenames.length; i++) {
    if (path.extname(filenames[i]).toLowerCase() === '.txt' && path.basename(filenames[i]) !== 'output.txt') {
      console.log(filenames[i])
      readAndProduce(filenames[i])
       }
    }

  if (err) {
    console.log(err);
    return;
  }
});


// var output = temp.map(function (array) {
//   return [array[0], array[1], array[2], array[3], array[4]];
// }).sort(function (a, b) {
//   return b[0] - a[0];
// });
// console.log(output)

// console.log(cleanData.length)
// console.log(typeof cleanData[1])
// fs.writeFile(defaultOutPath, `Output : \n${cleanData}\n`, function (err) {
//   console.log('after')
//   if (err) return console.error(err)
//   fs.readFile(defaultOutPath, 'utf-8', function (err, data) {
//     if (err) return console.error(err)
//     console.log(data);
//   });
// });