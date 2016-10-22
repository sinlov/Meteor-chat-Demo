Meteor.startup(function () {
    var httpMaster = new WebSockifyServer(function (url) {
        return {host: '127.0.0.1', port: 3002};
    });
    Messages.remove({});
    Rooms.remove({});
    if (Rooms.find().count() === 0) {
        ["Meteor", "JavaScript", "Reactive", "MongoDB", "LBS", "Other"].forEach(function (r) {
            Rooms.insert({roomname: r});
        });
    }
});