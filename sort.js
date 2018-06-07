const path = require('path')
const fs = require('fs')
const dirname = path.join(__dirname)

const ByDob = (arr) => {
    var output = arr.map(function (array) {
        return [array[0], array[1], array[2], array[3], array[4]];
    }).sort(function (a, b) {
        a = a[4].split('/').reverse().join('');
        b = b[4].split('/').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
    });
    return output
}

const ByLastN = (arr) => {
    var output = arr.map(function (array) {
        return [array[0], array[1], array[2], array[3], array[4]];
    }).sort(function (a, b) {
        a = a[0].split('/').reverse().join('');
        b = b[0].split('/').reverse().join('');
        return a > b ? -1 : a < b ? 1 : 0;

    });
    return output
}

const ByGender = (arr) => {
    let newArr = ByLastN(arr)
    var output = newArr.map(function (array) {
        return [array[0], array[1], array[2], array[3], array[4]];
    }).sort(function (a, b) {
        a = a[2].split('/').reverse().join('');
        b = b[2].split('/').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
    });
    return output
}

module.exports = {
    ByDob,
    ByGender,
    ByLastN
}