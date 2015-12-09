Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.notifyUserServers = function(userId, zone) {
    var servers = Servers.find({userId: userId}).fetch();
    servers.forEach(function(server) {
        try {
            console.log('Notifying: ' + server.endpoint + '?key=' + server.key);
            if(zone) {
                var zones = {};
                zones[zone.name] = zone.records;
                HTTP.post(server.endpoint + '/zones?key=' + server.key, {data: zones});
            } else {
                HTTP.get(server.endpoint + '?key=' + server.key);
            }
        } catch(e) {
            console.log(e);
        }
    });
};
