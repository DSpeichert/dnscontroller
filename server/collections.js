Meteor.publish('Zones', function () {
    // only publish to logged in users, only own records
    return Zones.find({userId: this.userId});
});

Zones.allow({
    insert: function (userId, doc) {
        // the user must be logged in, and the document must be owned by the user
        doc.createdAt = new Date();
        if(!doc.name || doc.name.slice(-1) != '.')
            throw new Meteor.Error(400, 'DNS Zone must end with a dot (.)!');

        if(Zones.findOne({name: doc.name, userId: userId}))
            throw new Meteor.Error(400, 'DNS Zone '+doc.name+' already exists!');

        var decision = (userId && doc.userId === userId);

        if(decision)
            Meteor.notifyUserServers(userId);

        return decision;
    },
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        var decision =  doc.userId === userId;

        if(decision)
            Meteor.notifyUserServers(userId);

        return decision;
    },
    remove: function (userId, doc) {
        // can only remove your own documents
        var decision = doc.userId === userId;

        if(decision)
            Meteor.notifyUserServers(userId);

        return decision;
    },
    fetch: ['userId']
});

Meteor.publish('Servers', function () {
    // only publish to logged in users, only own records
    return Servers.find({userId: this.userId});
});

Servers.allow({
    insert: function (userId, doc) {
        // the user must be logged in, and the document must be owned by the user
        return (userId && doc.userId === userId);
    },
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        return doc.userId === userId;
    },
    remove: function (userId, doc) {
        // can only remove your own documents
        return doc.userId === userId;
    },
    fetch: ['userId']
});
