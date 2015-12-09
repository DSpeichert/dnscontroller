Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.onBeforeAction(function () {
    // all properties available in the route function
    // are also available here such as this.params

    if (!Meteor.userId()) {
        // if the user is not logged in, render the Login template
        this.render('login');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.next();
    }
});

Router.route('/', function () {
    this.render('home');
}, {
    name: 'home'
});

Router.route('/zones', function () {
    this.render('zonesList', {
        data: function () {
            return {
                zones: Zones.find()
            };
        }
    });
}, {
    name: 'zonesList'
});

Router.route('/zones/add', function () {
    this.render('zonesAdd', {
        data: function () {
            return {
                zones: Zones.find()
            };
        }
    });
}, {
    name: 'zonesAdd'
});

Router.route('/zones/:_id', function () {
    this.render('zonesDetails', {
        data: function () {
            return {
                zone: Zones.findOne({_id: this.params._id})
            };
        }
    });
}, {
    name: 'zonesDetails'
});

Router.route('/servers', function () {
    this.render('serversList', {
        data: function () {
            return {
                servers: Servers.find()
            };
        }
    });
}, {
    name: 'serversList'
});

Router.route('/servers/add', function () {
    this.render('serversAdd', {
        data: function () {
            return {
                servers: Servers.find()
            };
        }
    });
}, {
    name: 'serversAdd'
});
