var tmi = require('tmi.js');
var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "first_video_",
        password: "oauth:5kinemca3wemv4wgrs8ity6h74j02o"
    },
    channels: ["first_video_"]
};
var client = new tmi.client(options);
client.connect();
client.on('chat', function (channel, user, message, self) {
    client.action("first_video_", user['display-name'] + "Hi! Welcome to my chat bro..");
});
client.on('connected', function (addres, port) {
    client.action("first_video_", "Добро пожаловать !")
});                                                           