Template.zonesDetails.events({
    'click a[data-action="delete"]': function(event) {
        event.preventDefault();
        var records = Zones.findOne({_id: Router.current().params._id}).records;
        records.splice(event.currentTarget.dataset.record, 1);
        Zones.update({_id: Router.current().params._id}, {$set: {records: records}});
    },

    'click #addRecord': function(event) {
        if($('#addRecord-data').val() == '')
            return alert('Data cannot be empty!');

        Zones.update({_id: Router.current().params._id}, {$push: {records: {
            name: $('#addRecord-name').val() + '.' + Zones.findOne({_id: Router.current().params._id}).name,
            type: $('#addRecord-type').val(),
            ttl: parseInt($('#addRecord-ttl').val()),
            data: $('#addRecord-data').val()
        }}});
    }
});
