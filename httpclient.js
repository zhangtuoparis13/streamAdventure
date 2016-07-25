/**
 * Created by TBtuo on 25/07/16.
 */

const http = require('http');
const request = require('request');
    var r = request.post('http://127.0.0.1:8099')
    process.stdin.pipe(r).pipe(process.stdout)


