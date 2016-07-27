/**
 * Created by TBtuo on 27/07/16.
 */

/*var crypto = require('crypto')
var stream = crypto.createDecipher('RC4', 'robots')
stream.pipe(process.stdout)
stream.write(Buffer([135,197,164,92,129,90,215,63,92]));
stream.end();*/

var crypto =require('crypto')
process.stdin
    .pipe(crypto.createDecipher('aes256', process.argv[2]))
    .pipe(process.stdout)
