var restify = require('restify')

function respond( req, res, next ){
    res.send('Welcome to OneBoard!')
    next()
}

var server = restify.createServer()
server.get('/', respond)

server.listen(80, function(){
    console.log('%s listening at %s', server.name, server.url)
})