/**
 * Created by yang on 2015/12/24.
 */
var soap = require('soap');

var url = 'http://127.0.0.1:8080/axis/services/SyncNotifySP?wsdl';

soap.createClient(url, function(err, client) {
    if (err) {
        console.error('err:', err);
        return;
    }
    console.log('client:', client);
    var args = {
        recordSequenceId: 123
    };
    client.orderRelationUpdateNotify(args, function(err1, res) {
        if (err) {
            console.error('err1:', err1);
            return;
        }
        console.log('res:', res);
    });
});