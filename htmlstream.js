/**
 * Created by TBtuo on 25/07/16.
 */

/*
const trumpet = require('trumpet');
const fs = require('fs');
const through = require('through')

var tr = trumpet();
var loud =tr.select('.loud').createStream();
loud.pipe(through(function (buf) {
    this.queue(buf.toString().toUpperCase())
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)*/

const fs = require('fs')
const through =require('through2')
const trumpet =require('trumpet')

var tr = trumpet();

var stream =tr.select('.loud').createStream();
stream.pipe(through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
})).pipe(stream)

process.stdin.pipe(tr).pipe(process.stdout)