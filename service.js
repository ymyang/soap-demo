/**
 * Created by yang on 2015/12/24.
 */
var path = require('path');
var fs = require('fs');
var http = require('http');
var soap = require('soap');

var wsdl = fs.readFileSync(path.join(__dirname, 'demo.wsdl'));

var myService = {
    SyncNotifySPServiceService: {
        SyncNotifySP: {
            orderRelationUpdateNotify: function(args) {
                console.log('args:', args);
                return args;
            }
        }
    }
};

var server = http.createServer(function(req,res) {
    res.end("404: Not Found: " + req.url);
});

server.listen(8000);
soap.listen(server, '/wsdl', myService, wsdl);