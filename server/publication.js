/**
 * Created by "sinlov" on 16/3/2.
 */
Meteor.publish("rooms", function () {
    return Rooms.find();
});
Meteor.publish("messages", function () {
    return Messages.find({}, {sort: {ts: -1}});
});