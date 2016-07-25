/**
 * Created by tuo on 16/7/26.
 */

var through2 = require('through2')

var objectStream = through2.obj(function (chunk, encoding, callback) {
    chunk.timestamp =new Date()
    // this.push(chunk)
    this.push(JSON.stringify(chunk,null,4)+ '\n')
    callback()
})

objectStream.pipe(process.stdout)

objectStream.write({status: 404,message: 'Not found'})
objectStream.write({status: 500,message: 'Internal server error'})
// objectStream.write('This is a test')

/*
var jsonStream = through2.obj(function (chunk, encoding, callback) {
    this.push(JSON.stringify(chunk,null,4) + '\n')
    callback()
})

objectStream.pipe(jsonStream)
            .pipe(process.stdout)*/
