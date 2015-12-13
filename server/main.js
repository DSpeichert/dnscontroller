Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.notifyUserServers = function(userId, zone_id) {
    var servers = Servers.find({userId: userId}).fetch();
    servers.forEach(function(server) {
        try {
            console.log('Notifying: ' + server.endpoint + '?key=' + server.key);
            var zone = Zones.findOne({_id: zone_id});
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
