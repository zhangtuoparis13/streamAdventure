/**
 * Created by TBtuo on 24/07/16.
 */

/*
const through =require('through2')
let stream = through(write,end);

function write(buffer, encoding, next) {
    this.push('I got some data:' + buffer.toString().toUpperCase() + '\n');
    next();
}

function end(done) {
    done();
}

process.stdin.pipe(stream).pipe(process.stdout)*/

var through = require('through2');
var tr = through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
});
process.stdin.pipe(tr).pipe(process.stdout);
