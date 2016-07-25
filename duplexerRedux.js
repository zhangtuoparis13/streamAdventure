/**
 * Created by TBtuo on 25/07/16.
 */

// var duplexer =require('duplexer')
// var through = require('through')

/*
module.exports = function (counter) {
    var counts ={};
    var input = through(write,end);
    return duplexer(input,counter)

    function write(row) {
        counts[row.country] = (counts[row.country] || 0) + 1;
    }
    function end() {
        counter.setCounts(counts)
    }
}*/

var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    return duplexer({objectMode: true}, input, counter);

    function write (row, _, next) {
        console.log("row",row,typeof(row))
        counts[row.country] = (counts[row.country] || 0) + 1;
        next();
    }
    function end (done) {
        console.log('counter',counter.setCounts,counts)
        counter.setCounts(counts);
        done();
    }
};
