const fs = require('fs');
const assert = require('chai').assert

describe('Test on I/O; FS', function () {
  it('write test', function (done) {
    fs.writeFile('./test/test.txt', "This is Node.js", function (err) {
      if (err) {
        throw "Unable to write file";
      }
      fs.readFile(`./test/test.txt`, 'utf-8', function (err, data) {
        assert.typeOf(data, 'string')
        assert.equal(data, "This is Node.js");
        done();
      });
    });
  });

  it('read test', function (done) {
      fs.readFile(`./test/test.txt`, 'utf-8', function (err, data) {
        assert.typeOf(data, 'string')
        assert.equal(data, "Hello Node.js");
        done();
      });
    });

    it('read directory', function (done) {
      fs.readdir(`./test`, function (err, filenames) {
        assert.equal(filenames.length, 3)
      done();
      });
    });

    
});