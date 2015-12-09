Router.route('/api/zones', function () {
    // NodeJS request object
    var request = this.request;

    // NodeJS  response object
    var response = this.response;

    // find server
    var server = Servers.findOne({key: request.query.key});
    if(!server) {
        response.writeHead(403, { 'Content-Type': 'application/json' });
        response.end();
    } else {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        var reply = {};
        Zones.find({userId: server.userId}).forEach(function(el) {
            reply[el.name] = el.records;
        });
        this.response.end(JSON.stringify(reply));
    }
}, {where: 'server'});
