/**
 * Created by TBtuo on 25/07/16.
 */

/*
let http = require('http')
let through = require('through')
let fs = require('fs')

let server = http.createServer(function (request, response) {
    if (request.method === 'POST'){
        request.pipe(through(function (buf) {
            this.queue(buf.toString().toUpperCase());
        })).pipe(response)
    }
    else response.end('Send me a POST\n');
})

server.listen(Number(process.argv[2]))*/

/*var http = require('http');
var through =require('through2');

var server = http.createServer(function (req,res) {
    if (req.method === 'POST') {
        res.pipe(through(function (buf, _, next) {
            this.push(buf.toString().toUpperCase());
            next();
        })).pipe(res);
    }
    else res.end('send me a POST\n');
});
server.listen(parseInt(process.argv[2]));*/

var http = require('http');
var through = require('through2');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function (buf, _, next) {
            this.push(buf.toString().toUpperCase());
            next();
        })).pipe(res);
    }
    else res.end('send me a POST\n');
});
server.listen(parseInt(process.argv[2]));

