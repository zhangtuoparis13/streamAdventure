/**
 * Created by TBtuo on 25/07/16.
 */

const ws = require('websocket-stream');

let stream = ws('ws://localhost:8099');

stream.end('hello\n');