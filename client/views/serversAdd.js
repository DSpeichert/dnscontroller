Template.serversAdd.events({
    'submit #add-server': function (event) {
        event.preventDefault();
        Servers.insert({
            userId: Meteor.userId(),
            endpoint: $('#endpoint').val(),
            key: $('#key').val()
        }, function(err, id) {
            if (err)
                alert(err);
            else
                Router.go('serversList');
        });
    }
});
