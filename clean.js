const path = require('path')
const fs = require('fs')
const dirname = path.join(__dirname)

var CommaFile = () => {
    var temp = []
    const filePath = path.join(__dirname, 'comma.txt')
    const f = fs.readFileSync(filePath)
    var arr = f.toString().replace(/ /g, '').replace(/-/g, '/').replace(/\n/g, ',').replace(/\|/g, ',').split(/,/g)
    for (i = 0; i < arr.length; i += 5) {
        var newArr = arr.slice(i, i + 5)
        temp.push(newArr)
    }
    return temp
}

var PipeFile = () => {
    const filePath = path.join(__dirname, 'pipe.txt')
    const f = fs.readFileSync(filePath)
    var arr = f.toString().replace(/ /g, '').replace(/-/g, '/').replace(/\n/g, ',').replace(/\|/g, ',').split(/,/g)
    var temp = []
    for (i = 0; i < arr.length; i += 6) {
        var newArr = arr.slice(i, i + 6)
        temp.push(newArr)
    }

    temp.map(x => x.splice(2, 1))
    temp.map(x => {
        if (x[2] === 'F') {
            x[2] = 'Female'
        }
        if (x[2] === 'M') {
            x[2] = 'Male'
        }
    })
    return temp
}

var SpaceFile = () => {
    const filePath = path.join(__dirname, 'space.txt')
    const f = fs.readFileSync(filePath)
    var arr = f.toString().replace(/ /g, ',').replace(/-/g, '/').replace(/\n/g, ',').split(/,/g)
    var temp = []
    for (i = 0; i < arr.length; i += 6) {
        var newArr = arr.slice(i, i + 6)
        temp.push(newArr)
    }

    temp.map(x => x.splice(2, 1))
    temp.map(x => {
        if (x[2] === 'F') {
            x[2] = 'Female'
        }
        if (x[2] === 'M') {
            x[2] = 'Male'
        }
    })
    temp.map(x => {
        let tempVal = x[4]
        x[4] = x[3]
        x[3] = tempVal
    })
    space = temp
    return temp

}

module.exports = {
    CommaFile,
    PipeFile,
    SpaceFile
}