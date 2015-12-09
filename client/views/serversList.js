Template.serversList.events({
    'click a[data-action="delete"]': function(event) {
        event.preventDefault();
        Servers.remove({_id: event.currentTarget.dataset.server});
    }
});
