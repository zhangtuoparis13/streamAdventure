/**
 * Created by TBtuo on 24/07/16.
 */

const fs = require('fs');

fs.createReadStream(process.argv[2]).pipe(process.stdout);