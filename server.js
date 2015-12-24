/**
 * Created by yang on 2015/12/24.
 */
var soap = require('soap-server');

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

var server = new soap.SoapServer();
server.addService('soap', myService);

server.listen(1337, '127.0.0.1');