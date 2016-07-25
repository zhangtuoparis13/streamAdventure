/**
 * Created by TBtuo on 25/07/16.
 */

// var concat = require('concat-stream');
// var http = require('http');
// var through = require('through2');
//
// var tr = through(function (buf,_,next) {
//     // var line =buf.toString();
//     this.push(concat(function (body) {
//       var line = buf.toString()
//     }))
//     next()
// })
//
// process.stdin
//           .pipe(tr)
//           .pipe(process.stdout)
//
//
//           var concat = require('concat-stream');
var concat = require('concat-stream');

process.stdin.pipe(concat(function (src) {
    var s = src.toString().split('').reverse().join('');
    console.log(s);
}));

