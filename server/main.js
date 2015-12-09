Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.notifyUserServers = function(userId) {
    var servers = Servers.find({userId: userId}).fetch();
    servers.forEach(function(server) {
        try {
            console.log('Notifying: ' + server.endpoint + '?key=' + server.key);
            HTTP.get(server.endpoint + '?key=' + server.key);
        } catch(e) {
            console.log(e);
        }
    });
};
