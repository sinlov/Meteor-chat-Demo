Meteor.startup(function () {
    Messages.remove({});
    Rooms.remove({});
    if (Rooms.find().count() === 0) {
        ["Meteor", "JavaScript", "Reactive", "MongoDB","LBS"].forEach(function(r) {
            Rooms.insert({roomname: r});
        });
    }
});