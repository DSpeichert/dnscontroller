Zones = new Meteor.Collection('Zones');
Servers = new Meteor.Collection('Servers');

if( Meteor.isClient ) {
    Meteor.subscribe('Zones');
    Meteor.subscribe('Servers');
}
