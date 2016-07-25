/**
 * Created by TBtuo on 25/07/16.
 */

/*
var split = require('split')
var through2 = require('through2')
process.stdin
    .pipe(split())
    .pipe(through2(function (line,_,next) {
        console.dir(line.toString());
        next();
    }))*/

/*
var through = require('through');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf) {
    var line = buf.toString();
/!*    this.queue(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );*!/
    if (lineCount % 2 === 0)
        this.queue(line.toLowerCase()+ '\n')
    else
        this.queue(line.toUpperCase()+ '\n')
    lineCount ++;
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);*/

var through = require('through2')
var split = require('split')

var lineCount = 0;
var tr = through(function (buf,_, next) {
    var line =buf.toString();
    if (lineCount % 2 === 0)
        this.push(line.toLowerCase()+ '\n')
    else
        this.push(line.toUpperCase()+ '\n')
    lineCount ++;
    next();
})

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)

