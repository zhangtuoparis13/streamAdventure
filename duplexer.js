/**
 * Created by TBtuo on 25/07/16.
 */

// const fs = require('fs');
var duplexer2 =require("duplexer2");
var spawn = require("child_process").spawn;

var mymodule = function (cmd, args) {
    var ps = spawn (cmd, args)
    return duplexer2(ps.stdin, ps.stdout)
}

module.exports =mymodule;
