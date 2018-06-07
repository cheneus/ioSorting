const fs = require('fs')

beforeEach(() => {
    fs.writeFile('./test/test.txt', "Hello Node.js", function (err) {
        if (err) {
          throw "Unable to write file";
        }
})
})