/**
 * Created by tuo on 16/7/26.
 */

var solution = require("./duplexerRedux")
var stream = require('stream')
var fs = require('fs')
var counter = new stream.Readable({objectMode:true})
var through = require("through2")

counter._read = function _read(n) {

}
counter.setCounts = function (count) {
    this.count =count;
}

var r = solution(counter);
r.write({"short":"OH","name":"Ohio","country":"US"});
r.write({"name":"West Lothian","country":"GB","region":"Scotland"});
r.write({"short":"NSW","name":"New South Wales","country":"AU"});
r.end();
