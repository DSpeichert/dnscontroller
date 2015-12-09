Template.menu.helpers({
    isCurrentRoute: function(route) {
        return route === Router.current().route.getName();
    }
});
