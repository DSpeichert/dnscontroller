Template.zonesAdd.events({
    'submit #add-zone': function (event) {
        event.preventDefault();
        Zones.insert({
            userId: Meteor.userId(),
            name: $('#zone').val(),
            records: [
                {
                    name: $('#zone').val(),
                    type: 'SOA',
                    ttl: 300,
                    data: $('#authority').val() + ' hostmaster.'+$('#zone').val()+' 1399838297 21600 3600 1814400 300'
                }
            ]
        }, function(err, id) {
            if (err)
                alert(err);
            else
                Router.go('zonesDetails', {_id: id});
        });
    }
});
