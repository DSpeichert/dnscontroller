Template.zonesList.events({
    'click a[data-action="delete"]': function(event) {
        event.preventDefault();
        Zones.remove({_id: event.currentTarget.dataset.zone});
    }
});
